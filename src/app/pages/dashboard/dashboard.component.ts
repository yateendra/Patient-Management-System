import { Component, inject, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ServicehttpService } from '../../servicehttp.service';
import { dataInterface } from '../../dataInterface';
import { myClass } from '../../myclass';
import { FormsModule } from '@angular/forms';
import { toast, NgxSonnerToaster } from 'ngx-sonner';
import { CommonModule } from '@angular/common';
import moment from 'moment';




@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [FormsModule, NgxSonnerToaster, CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {

  @ViewChild('homeTab', { static: false }) homeTab!: ElementRef;
  @ViewChild('pTab', { static: false }) pTab!: ElementRef;

  protected readonly toast = toast;




  @ViewChild('myModal2') model2: ElementRef | undefined;
  




  openModal2() {

    const myModal2 = document.getElementById('myModal2');
    if (myModal2 != null) {
      myModal2.style.display = 'block';
    }

  }
  closeModal2() {

    if (this.model2 != null) {
      this.model2.nativeElement.style.display = 'none';
    }
  }

  details(data: dataInterface) {

    this.myObj = data
    this.openModal2();


  }





  myObj: myClass = new myClass()
  mydata: myClass[] = []
  filteredOrder: myClass[] = []

  myservice = inject(ServicehttpService)


  ngOnInit(): void {
    this.getall()



  }



  getall() {
    this.myservice.getdata().subscribe((res: any) => {
      this.mydata = res;
      this.filteredOrder = res

    })



  }







  onEdit(data: dataInterface) {
    debugger
    this.myObj = data


    this.getall()
    this.pTab.nativeElement.click();

  }


  mybtn() {
    this.pTab.nativeElement.click();
    this.myObj = new myClass();
  }


  onSaveproject() {
    debugger;
    this.myservice.addDataS(this.myObj).subscribe((res: dataInterface) => {

      this.getall()
      if (res) {


        this.myObj = new myClass()
        this.homeTab.nativeElement.click();
        toast.success('Petient has been created');

      } else {
        alert(res)
      }
    })
  }




  onUpdate() {
    debugger;

    if (this.myObj.id) {
      this.myservice.editS(this.myObj.id, this.myObj).subscribe((res: dataInterface) => {


        if (res) {
          this.myObj = new myClass();
          this.getall();
          this.homeTab.nativeElement.click();
          toast.success('Petient has been updeted');
        } else {
          alert('Update failed');
        }
      }, (error) => {
        console.error('Error updating data:', error);
        alert('Error while updating data');
      });
    } else {
      alert('ID not found. Cannot update.');
    }
  }









  dataDelete(id: any) {

    const del = confirm("are you sure you want to delete?")

    if (del) {
      this.myservice.deleteS(id).subscribe((res: dataInterface) => {
        this.getall()
        toast.success('Petient has been deleted');

      });

    }

  }

  filterOrder(input: string) {

    this.filteredOrder = this.mydata.filter((itm) => {
      return Object.values(itm).some((val) => {
        return String(val).toLocaleLowerCase().includes(input.toLocaleLowerCase());
      });
    });
  }


  formatDate(date: string) {
    return moment(date).format('Do MMM YY');
  }
  clearFilters(searchInput: HTMLInputElement, dateInput: HTMLInputElement): void {
    searchInput.value = '';
    dateInput.value = '';
    this.filterOrder('');
    this.filterOrder('');
  }











}



