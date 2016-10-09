/// <reference path="../typings/index.d.ts" />
import * as React from 'react';
import LikeButton from "./LikeButton";

export interface Props {
    content: string;
}
export default class MyComponent extends React.Component<Props, {}> {
    render() {

        let rows: number[] = [];
        for (let i = 0; i < 10; i++) {
            rows.push(i);
        }

        let html = rows.map((row) => <p key={row}>No.{row}:{this.props.content}</p>);
//        return <div>{html}</div>;
        return <LikeButton/>;
    }
}
