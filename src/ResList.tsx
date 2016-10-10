/// <reference path="../typings/index.d.ts" />
import * as React from 'react';
import Res from './res'
import ResData from './resdata';

interface Props {
    resList: ResData[];
}

export default class ResList extends React.Component<Props, {}> {
    render() {
        let rows = this.props.resList.map((res) =>
            <div key={res.no}>
                <Res res={res} />
            </div>
        );
        return <div>{rows}</div>;
    }
}
