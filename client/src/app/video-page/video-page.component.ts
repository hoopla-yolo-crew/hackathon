import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
@Component({
    selector: 'video-page',
    templateUrl: 'video-page.component.pug',
    styleUrls: ['video-page.component.styl']
})
export class VideoPageComponent implements OnInit {

    private videoId: string;
    constructor(private route: ActivatedRoute) { }

    ngOnInit() {
        this.route.params.subscribe(params => {
            this.videoId = params.id;
        });
    }
}
