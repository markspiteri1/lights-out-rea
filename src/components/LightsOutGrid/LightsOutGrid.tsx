import { v4 as uuid } from 'uuid';

import { useEffect, useState } from 'react';
import LightsOutCell, { CellProps } from '../LightsOutCell/LightsOutCell';

import './LightsOutGrid.scss';
import Cell from './LightsOutGrid.models';

interface GridProps {
    rows?: Number;
    cols?: Number;
}

function LightsOutGrid({ rows = 5, cols = 5 }: GridProps) {
    const [grid, setGrid] = useState<Array<Array<CellProps>>>([[]]);

    function handleOnClick(col: number, row: number) {
        console.log('X:' + col + ' Y:' + row);
        let tempGrid = [...grid];
        tempGrid[row][col].isOn = !tempGrid[row][col].isOn;
        setGrid(tempGrid);
    }

    function flipCurrentAndAdjacent(row: number, col: number) {
        // debugger;
        let tempGrid = [...grid];

        // selected cell
        tempGrid[row][col].isOn = !tempGrid[row][col].isOn;

        // cell on top
        debugger;
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
                        isOn: true,
                    };
                }
            }
            setGrid(grid);
        },
        [cols, rows]
    );

    return (
        <div className="grid">
            {grid.map((row, y) => {
                return (
                    <div key={uuid()} className="row">
                        {row.map((cell, x) => {
                            return (
                                <LightsOutCell
                                    handleOnClick={() =>
                                        flipCurrentAndAdjacent(y, x)
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
    );
}
export default LightsOutGrid;
