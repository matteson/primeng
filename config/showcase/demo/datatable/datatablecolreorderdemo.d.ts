import { OnInit } from '@angular/core';
import { Car } from '../domain/car';
import { CarService } from '../service/carservice';
export declare class DataTableColReorderDemo implements OnInit {
    private carService;
    cars: Car[];
    constructor(carService: CarService);
    ngOnInit(): void;
}
