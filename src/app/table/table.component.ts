import { Component, OnInit } from '@angular/core';
import { BitcoinsService } from '../shared/bitcoin/bitcoins.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  exchanges: any[] = []
  trade:any[]=[]
  icons: any[] = []
  title = 'stocks';
  p: number = 1;
  searchTerm: any

  constructor(private _bitcon: BitcoinsService) { }
  ngOnInit(): void {
    this.trade = this.exchanges.concat(this.exchanges);

    this._bitcon.getIcons().subscribe(res => { this.icons = res })
    this._bitcon.getExchages().subscribe(res => this.exchanges = res)

  }
}
