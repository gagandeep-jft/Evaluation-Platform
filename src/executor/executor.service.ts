import { HttpService } from '@nestjs/axios';
import { BadRequestException, Body, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { firstValueFrom } from 'rxjs';
import { executorDto } from './dto';
import { executorOptions } from './executor_options';
@Injectable()
export class ExecutorService {
  constructor(
    private httpService: HttpService,
    private configService: ConfigService,
  ) {}

  getOptions() {
    return executorOptions;
  }

  async execute(questionData: executorDto) {
    const url = this.configService.get('EXECUTOR_URL');
    const toBeSent = {
      clientId: this.configService.get('EXECUTOR_CLIENT_ID'),
      clientSecret: this.configService.get('EXECUTOR_CLIENT_SECRET'),
      script: questionData.script,
      language: questionData.language,
      stdin: questionData.stdin,
      versionIndex: questionData.versionIndex,
    };
    // console.log(toBeSent);
    try {
      const { data } = await firstValueFrom(
        this.httpService.post(url, toBeSent),
      );
      return data;
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }
  getOutput(@Body() data: executorDto) {
    return this.execute(data);
  }
}
