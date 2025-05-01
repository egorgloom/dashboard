import React, { useMemo } from 'react';
import { FC } from 'react';
import { IMetrics } from '../../interfaces/interface';
import { calculateAverage } from './../../common';

interface IDiskUsageIndicator {
    elem: IMetrics | undefined,
    isLoading: boolean,
    isError: boolean,
}

const DiskUsageIndicator: FC<IDiskUsageIndicator> = ({ elem, isError, isLoading }) => {

    const resourceData = useMemo(() => [
        {
            label: 'CPU Usage',
            value: calculateAverage(elem?.historicalData?.h1?.cpu ?? []),
        },
        {
            label: 'Memory Usage',
            value: calculateAverage(elem?.historicalData?.h1?.memory ?? []),
        },
    ], [elem?.historicalData?.h1?.cpu, elem?.historicalData?.h1?.memory]);

    if (isLoading) {
        return <div>Загрузка...</div>;
    }
    
    if (isError) {
        return <div>Ошибка при загрузке данных</div>;
    }
    return (
        <>
            <section className="system-resources">
                <h2 className="system-resources__header">System Resources</h2>
                <div className="system-resources__wrapper">
                    {resourceData.map((resource, index) => (
                        <div key={index} className="system-resources__wrapper__resource-item">
                            <span className="system-resources__wrapper__resource-item__label">{resource.label}</span>
                            <span className="system-resources__wrapper__resource-item__value">{resource.value}%</span>
                        </div>
                    ))}
                    <div className="system-resources__wrapper__resource-item">
                        <span className="system-resources__wrapper__resource-item__label">Disk Usage</span>
                        <span className="system-resources__wrapper__resource-item__value">71%</span>
                    </div>
                </div>
            </section>
        </>
    );
};

export default DiskUsageIndicator;