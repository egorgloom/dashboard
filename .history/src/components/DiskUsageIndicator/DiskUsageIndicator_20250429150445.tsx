import React from 'react';
import { FC } from 'react';
import { IMetrics } from '../../interfaces/interface';

interface IDiskUsageIndicator {
    data: IMetrics
}

const DiskUsageIndicator: FC<IDiskUsageIndicator> = ({data}) => {


  return (
    <>
                    <section className="system-resources">
                    <h2 className="system-resources__header">System Resources</h2>
                    <div className="system-resources__wrapper">
                        <div className="system-resources__wrapper__resource-item">
                            <span className="system-resources__wrapper__resource-item__label">CPU Usage</span>
                            <span className="system-resources__wrapper__resource-item__value">Меняй%</span>
                        </div>
                        <div className="system-resources__wrapper__resource-item">
                            <span className="system-resources__wrapper__resource-item__label">Memory Usage</span>
                            <span className="system-resources__wrapper__resource-item__value">Меняй%</span>
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