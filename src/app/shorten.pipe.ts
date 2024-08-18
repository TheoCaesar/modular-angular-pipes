import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name:"truncate" //template variable to invoke use in template
})
export class ShortenPipe implements PipeTransform {
    transform(value: string, length:number = 10, startIndex: number = 0) {
        if (value.length > length) {
           return value.substring(startIndex, length) + '...'
        }
        return value;
    }
}