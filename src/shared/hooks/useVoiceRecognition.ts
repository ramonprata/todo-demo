import { useCallback, useEffect, useState } from 'react';
import Voice, { SpeechResultsEvent } from '@react-native-voice/voice';
import { DeviceFeatures } from '../base/DeviceFeatures';

export const useVoiceRecognition = () => {
  const [results, setResults] = useState<string>('');
  useEffect(() => {
    const setUpVoiceRecognition = async () => {
      let permissionGranted = false;
      if (DeviceFeatures.isAndroid) {
        permissionGranted = await DeviceFeatures.androidPermissionGranted(
          'android.permission.RECORD_AUDIO',
        );
      }
      if (DeviceFeatures.isIOS) {
        permissionGranted = true;
      }

      if (permissionGranted) {
        function onSpeechStart() {
          // console.log('onSpeechStart: ', e);
        }
        function onSpeechEnd() {
          // console.log('onSpeechEnd: ', e);
        }
        function onSpeechError() {
          // console.log('onSpeechError: ', e);
        }
        function onSpeechPartialResults() {
          // console.log('onSpeechPartialResults: ', e);
        }
        function onSpeechVolumeChanged() {
          // console.log('onSpeechVolumeChanged: ', e);
        }
        function onSpeechResults(e: SpeechResultsEvent) {
          const { value } = e;
          if (value?.length) {
            setResults(value.join(' '));
          }
        }
        Voice.onSpeechStart = onSpeechStart;
        Voice.onSpeechEnd = onSpeechEnd;
        Voice.onSpeechError = onSpeechError;
        Voice.onSpeechResults = onSpeechResults;
        Voice.onSpeechPartialResults = onSpeechPartialResults;
        Voice.onSpeechVolumeChanged = onSpeechVolumeChanged;
        return () => {
          Voice.destroy().then(Voice.removeAllListeners);
        };
      }
    };
    setUpVoiceRecognition();
  }, []);

  const startRecognizing = async () => {
    try {
      if (results) {
        setResults('');
      }
      await Voice.start('en-US');
    } catch (e) {
      console.error('startRecognizing', e);
    }
  };

  const stopRecognizing = useCallback(async () => {
    try {
      await Voice.stop();
    } catch (e) {
      console.error(e);
    }
  }, []);

  return {
    startRecognizing,
    stopRecognizing,
    results,
  };
};
