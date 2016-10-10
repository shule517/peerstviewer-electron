/// <reference path="../typings/index.d.ts" />
import * as React from 'react';
import ResList from './resList';
import UpdateButton from './UpdateButton';
import ResData from './ResData';

interface State {
    resList: ResData[];
}

export default class Viewer extends React.Component<{}, State> {
    constructor(props: any) {
        super(props);
        this.state = {resList: []};
    }

    addRes() {
        let resList = this.state.resList;
        resList.push(new ResData(resList.length + 1, 'sage', 'shule517', '2016/10/10', 'id', 'test'));
        this.setState({resList: resList});
    }

    render() {
        return (
            <div>
                <UpdateButton onClick={() => this.addRes()}/>
                <ResList resList={this.state.resList}/>
            </div>
        );
    }
}
