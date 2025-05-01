import React from 'react';
import { FC } from 'react';
import { IMetrics } from '../../interfaces/interface';
import { calculateAverage } from './../../common';

interface IDiskUsageIndicator {
    elem: IMetrics | undefined
}

const DiskUsageIndicator: FC<IDiskUsageIndicator> = ({elem}) => {

    const cpuServer = calculateAverage(elem?.historicalData?.h1?.cpu ?? [])
    const memoryServer = calculateAverage(elem?.historicalData?.h1?.cpu ?? [])
  return (
    <>
                    <section className="system-resources">
                    <h2 className="system-resources__header">System Resources</h2>
                    <div className="system-resources__wrapper">
                        <div className="system-resources__wrapper__resource-item">
                            <span className="system-resources__wrapper__resource-item__label">CPU Usage</span>
                            <span className="system-resources__wrapper__resource-item__value">{cpuServer}%</span>
                        </div>
                        <div className="system-resources__wrapper__resource-item">
                            <span className="system-resources__wrapper__resource-item__label">Memory Usage</span>
                            <span className="system-resources__wrapper__resource-item__value">{memoryServer}%</span>
                        </div>
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