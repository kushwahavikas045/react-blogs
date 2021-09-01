import React from 'react'
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

const Loading = () => {

    const antIcon = <LoadingOutlined style={{ fontSize: 24, position: 'absolute', left:'50%', top:'50%' }} spin />;
    return (
        <div>
            <Spin indicator={antIcon} />
        </div>
    )
}

export default Loading
