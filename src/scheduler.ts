'use strict';
import * as vscode from 'vscode';
//import { ReminderView } from './reminderView';

export class Scheduler {
    public constructor() {
    }

    public start() {
        setInterval(() => {
            vscode.window.showInformationMessage('小哥哥~ 代码写久了，该休息啦~')
           // ReminderView.show();
        }, 1000 * 10);
    }
}
