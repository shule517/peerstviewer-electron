/// <reference path="../typings/index.d.ts" />
import * as React from 'react';
import ResData from './resdata';

interface Props {
    res: ResData;
}

export default class Res extends React.Component<Props, {}> {
    render() {
        let res = this.props.res;
        return (
            <div>
                <p>{res.no}:[{res.mail}] {res.name} ID:{res.id}</p>
                <p>{res.message}</p>
            </div>
        );
    }
}
