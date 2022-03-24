import { IBoard } from '../../../shared/types';

const mockImages = [
  'https://c0.wallpaperflare.com/preview/34/705/139/tasks-plan-target-list.jpg',
  'https://c4.wallpaperflare.com/wallpaper/632/34/549/technology-monitor-alpha-coders-binary-wallpaper-preview.jpg',
  'https://as1.ftcdn.net/v2/jpg/02/82/38/56/1000_F_282385652_CfIhequDaLtEZb3CaJK8tkLyfdJy0f23.jpg',
];

export const boards: IBoard[] = [
  {
    title: 'Board one',
    imagePath: mockImages[0],
  },
  {
    title: 'Board two',
    imagePath: mockImages[1],
  },
  {
    title: 'Board three',
    imagePath: mockImages[2],
  },
];
