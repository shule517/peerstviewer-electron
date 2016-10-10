/// <reference path="../typings/index.d.ts" />
import * as React from 'react';

interface Props {
    onClick: () => void;
}

export default class ResList extends React.Component<Props, {}> {
    render() {
        return <button onClick={this.props.onClick}>更新</button>;
    }
}
