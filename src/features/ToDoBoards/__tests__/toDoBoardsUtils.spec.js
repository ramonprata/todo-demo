const { getColumnsByBoardName } = require('../toDoBoardsUtils');

describe('Testes on toDoBoardsUtils', () => {
  it('should ', () => {
    const res = getColumnsByBoardName(
      {
        todo: {
          title: 'todo',
          boardName: 'board one',
          tasks: [],
        },
        doing: {
          title: 'doing',
          boardName: 'board one',
          tasks: [],
        },
        doing: {
          title: 'doing',
          boardName: 'board two',
          tasks: [],
        },
      },
      'board one',
    );

    expect(res).toBe(true);
  });
});
