import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dynamic-example',
  templateUrl: './dynamic-example.component.html',
  styleUrls: ['./dynamic-example.component.scss']
})
export class DynamicExampleComponent implements OnInit {

  name = 'Angular';  
    
  productForm: FormGroup = this.fb.group({});  
  
  constructor(private fb:FormBuilder) { 
    this.productForm = this.fb.group({  
      name: '',  
      quantities: this.fb.array([]) ,  
    });  
  }

  ngOnInit(): void {
  }

  quantities() : FormArray {  
    return this.productForm.get("quantities") as FormArray  
  }  

  newQuantity(): FormGroup {  
    return this.fb.group({  
      qty: '',  
      price: '',  
    })  
  }  

  addQuantity() {  
    this.quantities().push(this.newQuantity());  
  }  
     
  removeQuantity(i:number) {  
    this.quantities().removeAt(i);  
  }  
     
  onSubmit() {  
    console.log(this.productForm.value);  
    console.log(this.quantities().controls)
  }  

}
