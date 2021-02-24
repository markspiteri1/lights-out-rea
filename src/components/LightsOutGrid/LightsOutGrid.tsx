import { v4 as uuid } from 'uuid';

import { useEffect, useState } from 'react';
import LightsOutCell, { CellProps } from '../LightsOutCell/LightsOutCell';

import './LightsOutGrid.scss';

interface GridProps {
    rows?: Number;
    cols?: Number;
}

function LightsOutGrid({ rows = 5, cols = 5 }: GridProps) {
    const [grid, setGrid] = useState<Array<Array<CellProps>>>([[]]);

    function handleOnClick(x: number, y: number) {
        console.log('X:' + x + ' Y:' + y);
    }
    useEffect(
        function initialiseGrid() {
            let grid: Array<Array<CellProps>> = [];
            for (let x = 0; x < rows; x++) {
                grid[x] = [];
                for (let y = 0; y < cols; y++) {
                    grid[x][y] = {
                        isOn: true,
                        handleOnClick: () => handleOnClick(x, y),
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
                    <div className="row">
                        {row.map((cell, x) => {
                            return (
                                <LightsOutCell
                                    handleOnClick={() => alert('ff')}
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
