import { v4 as uuid } from 'uuid';

import { useEffect, useState } from 'react';
import LightsOutCell, { CellProps } from '../LightsOutCell/LightsOutCell';

import './LightsOutGrid.scss';
import Cell from './LightsOutGrid.models';

interface GridProps {
    rows?: Number;
    cols?: Number;
}

function LightsOutGrid({ rows = 1, cols = 2 }: GridProps) {
    const [grid, setGrid] = useState<Array<Array<CellProps>>>([[]]);

    function flipCurrentAndAdjacent(row: number, col: number) {
        let tempGrid = [...grid];

        // selected cell
        tempGrid[row][col].isOn = !tempGrid[row][col].isOn;

        // cell on top
        if (row - 1 >= 0) {
            tempGrid[row - 1][col].isOn = !tempGrid[row - 1][col].isOn;
        }

        // cell to the right
        if (col + 1 < cols) {
            tempGrid[row][col + 1].isOn = !tempGrid[row][col + 1].isOn;
        }

        // cell under
        if (row + 1 < rows) {
            tempGrid[row + 1][col].isOn = !tempGrid[row + 1][col].isOn;
        }

        // cell to the right
        if (col - 1 >= 0) {
            tempGrid[row][col - 1].isOn = !tempGrid[row][col - 1].isOn;
        }

        setGrid(tempGrid);
    }

    useEffect(
        function initialiseGrid() {
            let grid: Array<Array<Cell>> = [];
            for (let x = 0; x < rows; x++) {
                grid[x] = [];
                for (let y = 0; y < cols; y++) {
                    grid[x][y] = {
                        isOn: false,
                    };
                }
            }
            setGrid(grid);
        },
        [cols, rows]
    );

    const isGameWon = (): boolean => {
        if (!grid){
            return false
        }
        for (let x = 0; x < rows; x++) {
            for (let y = 0; y < cols; y++) {
                if (!grid[x][y]?.isOn) {
                    return false;
                }
            }
        }
        return true;
    };

    return (
        <div className="grid">
            {!isGameWon() ? (
                <>
                    <h1>Lights Out</h1>
                    <div className="grid-container">
                        <div className="grid-container-cells">
                            {grid.map((row, y) => {
                                return (
                                    <div
                                        key={uuid()}
                                        className="grid-container-cells-row"
                                    >
                                        {row.map((cell, x) => {
                                            return (
                                                <LightsOutCell
                                                    handleOnClick={() =>
                                                        flipCurrentAndAdjacent(
                                                            y,
                                                            x
                                                        )
                                                    }
                                                    key={uuid()}
                                                    isOn={grid[y][x].isOn}
                                                />
                                            );
                                        })}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </>
            ) : (
                <h1>Congratulations! You have won!</h1>
            )}
        </div>
    );
}
export default LightsOutGrid;
