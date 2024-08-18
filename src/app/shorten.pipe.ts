import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name:"truncate" //template variable to invoke use in template
})
export class ShortenPipe implements PipeTransform {
    transform(value: string, length:number = 10) {
        if (value.length > length) {
           return value.substring(0, length) + '...'
        }
        return value;
    }
}