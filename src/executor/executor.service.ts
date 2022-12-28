import { Injectable } from '@nestjs/common';
import { executorOptions } from './executor_options';
@Injectable()
export class ExecutorService {
  getOptions() {
    return executorOptions;
  }
}
