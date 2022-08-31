import { Component } from '@angular/core';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';

import { ArchiveTask, PinTask } from '../../state/task.state';


@Component({
    selector: 'app-task-list',
    templateUrl: './task-list.component.html',
})
export class TaskListComponent {
    tasks$?: Observable<any>;

    constructor(private store: Store) {
        this.tasks$ = store.select((state) => state.taskbox.tasks);
    }

    /** Component method to trigger archiveTask event */
    archiveTask(id: string) {
        this.store.dispatch(new ArchiveTask(id));
    }
    
    /** Component method to trigger pinTask event */
    pinTask(id: string) {
        this.store.dispatch(new PinTask(id));
    }
}