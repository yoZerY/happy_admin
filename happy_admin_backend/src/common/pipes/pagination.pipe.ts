import { Injectable, PipeTransform } from '@nestjs/common'

@Injectable()
export class PaginationPipe implements PipeTransform {
  transform(value: any) {
    console.log('value', value)

    return {
      ...value,
      currentPage: value?.currentPage || 1,
      pageSize: value?.pageSize || 20
    }
  }
}
