import { Board, Direction, TileValue } from "@/types/game";

// Khởi tạo board trống 4x4
export const createEmptyBoard = (): Board => {
  return Array(4).fill(null).map(() => Array(4).fill(0));
};

// Tạo board mới với 2 tiles ngẫu nhiên
export const createInitialBoard = (): Board => {
  const board = createEmptyBoard();
  addRandomTile(board);
  addRandomTile(board);
  return board;
};

// Thêm tile ngẫu nhiên (90% là 2, 10% là 4)
export const addRandomTile = (board: Board): boolean => {
  const emptyCells = getEmptyCells(board);
  if (emptyCells.length === 0) return false;

  const randomIndex = Math.floor(Math.random() * emptyCells.length);
  const { row, col } = emptyCells[randomIndex];
  const value = Math.random() < 0.9 ? 2 : 4;
  
  board[row][col] = value as TileValue;
  return true;
};

// Lấy danh sách ô trống
export const getEmptyCells = (board: Board): { row: number; col: number }[] => {
  const emptyCells: { row: number; col: number }[] = [];
  for (let row = 0; row < 4; row++) {
    for (let col = 0; col < 4; col++) {
      if (board[row][col] === 0) {
        emptyCells.push({ row, col });
      }
    }
  }
  return emptyCells;
};

// Deep clone board
export const cloneBoard = (board: Board): Board => {
  return board.map(row => [...row]);
};

// Kiểm tra 2 board có giống nhau không
export const boardsEqual = (board1: Board, board2: Board): boolean => {
  for (let row = 0; row < 4; row++) {
    for (let col = 0; col < 4; col++) {
      if (board1[row][col] !== board2[row][col]) {
        return false;
      }
    }
  }
  return true;
};

// Tính điểm từ một lần merge
export const calculateMergeScore = (value: TileValue): number => {
  return value;
};

// Kiểm tra thắng (có tile 2048)
export const checkWin = (board: Board): boolean => {
  for (let row = 0; row < 4; row++) {
    for (let col = 0; col < 4; col++) {
      if (board[row][col] === 2048) {
        return true;
      }
    }
  }
  return false;
};

// Kiểm tra thua (không thể di chuyển)
export const checkGameOver = (board: Board): boolean => {
  // Nếu còn ô trống, chưa thua
  if (getEmptyCells(board).length > 0) {
    return false;
  }

  // Kiểm tra có thể merge theo chiều ngang
  for (let row = 0; row < 4; row++) {
    for (let col = 0; col < 3; col++) {
      if (board[row][col] === board[row][col + 1]) {
        return false;
      }
    }
  }

  // Kiểm tra có thể merge theo chiều dọc
  for (let row = 0; row < 3; row++) {
    for (let col = 0; col < 4; col++) {
      if (board[row][col] === board[row + 1][col]) {
        return false;
      }
    }
  }

  return true;
};

// Di chuyển và merge một hàng/cột
const moveAndMergeArray = (arr: TileValue[]): { newArr: TileValue[], score: number } => {
  // Loại bỏ các ô trống
  const filtered = arr.filter(val => val !== 0);
  const result: TileValue[] = [];
  let score = 0;
  let i = 0;

  while (i < filtered.length) {
    if (i < filtered.length - 1 && filtered[i] === filtered[i + 1]) {
      // Merge 2 ô giống nhau
      const mergedValue = (filtered[i] * 2) as TileValue;
      result.push(mergedValue);
      score += mergedValue;
      i += 2; // Bỏ qua ô tiếp theo
    } else {
      // Giữ nguyên ô
      result.push(filtered[i]);
      i++;
    }
  }

  // Thêm các ô 0 vào cuối
  while (result.length < 4) {
    result.push(0);
  }

  return { newArr: result, score };
};

// Di chuyển board theo direction
export const moveBoard = (board: Board, direction: Direction): { newBoard: Board, score: number, moved: boolean } => {
  const newBoard = cloneBoard(board);
  let totalScore = 0;
  let moved = false;

  switch (direction) {
    case 'left':
      for (let row = 0; row < 4; row++) {
        const { newArr, score } = moveAndMergeArray(newBoard[row]);
        if (!arraysEqual(newBoard[row], newArr)) {
          moved = true;
        }
        newBoard[row] = newArr;
        totalScore += score;
      }
      break;

    case 'right':
      for (let row = 0; row < 4; row++) {
        const reversed = [...newBoard[row]].reverse();
        const { newArr, score } = moveAndMergeArray(reversed);
        const result = newArr.reverse();
        if (!arraysEqual(newBoard[row], result)) {
          moved = true;
        }
        newBoard[row] = result;
        totalScore += score;
      }
      break;

    case 'up':
      for (let col = 0; col < 4; col++) {
        const column = [newBoard[0][col], newBoard[1][col], newBoard[2][col], newBoard[3][col]];
        const { newArr, score } = moveAndMergeArray(column);
        if (!arraysEqual(column, newArr)) {
          moved = true;
        }
        for (let row = 0; row < 4; row++) {
          newBoard[row][col] = newArr[row];
        }
        totalScore += score;
      }
      break;

    case 'down':
      for (let col = 0; col < 4; col++) {
        const column = [newBoard[0][col], newBoard[1][col], newBoard[2][col], newBoard[3][col]];
        const reversed = [...column].reverse();
        const { newArr, score } = moveAndMergeArray(reversed);
        const result = newArr.reverse();
        if (!arraysEqual(column, result)) {
          moved = true;
        }
        for (let row = 0; row < 4; row++) {
          newBoard[row][col] = result[row];
        }
        totalScore += score;
      }
      break;
  }

  return { newBoard, score: totalScore, moved };
};

// So sánh 2 array
const arraysEqual = (arr1: TileValue[], arr2: TileValue[]): boolean => {
  return arr1.length === arr2.length && arr1.every((val, index) => val === arr2[index]);
};