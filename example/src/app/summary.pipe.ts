import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
    name: "summary"
})

export class SummaryPipe implements PipeTransform {
    transform(value: string, limit: number) {
        if (!value) return null
        let x = (limit) ? limit : 20
        return value.substr(0, x) + "..."
    }

}