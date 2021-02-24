import clsx from 'clsx';

import './LightsOutCell.scss';

export interface CellProps {
    isOn: boolean;
    handleOnClick: () => void;
}

function LightsOutCell(props: CellProps) {
    const { isOn, handleOnClick } = props;

    return (
        <div
            className={clsx('gridcell', isOn ? 'on' : 'off')}
            onClick={handleOnClick}
        />
    );
}

export default LightsOutCell;
