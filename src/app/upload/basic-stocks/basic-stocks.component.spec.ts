/* tslint:disable:no-unused-variable */
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {DebugElement} from '@angular/core';

import {BasicStocksComponent} from './basic-stocks.component';

describe('BasicStocksComponent', () => {
    let component: BasicStocksComponent;
    let fixture: ComponentFixture<BasicStocksComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [BasicStocksComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(BasicStocksComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
