import { Injectable } from '@nestjs/common';
import { TestCaseDto } from './dto/create-test-case.dto';
import { UpdateTestCaseDto } from './dto/update-test-case.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { TestCase } from './entities';
import { Repository } from 'typeorm';

@Injectable()
export class TestCasesService {
  constructor(
    @InjectRepository(TestCase)
    private readonly testCaseRepository: Repository<TestCase>,
  ) {}

  async create(TestCaseDto: TestCaseDto) {
    const result = this.testCaseRepository.create(TestCaseDto);
    return await this.testCaseRepository.save(result);
  }

  async findAll() {
    return await this.testCaseRepository.find();
  }

  update(id: number, updateTestCaseDto: UpdateTestCaseDto) {
    return this.testCaseRepository.update({ id }, updateTestCaseDto);
  }

  remove(id: number) {
    return `This action removes a #${id} testCase`;
  }
}
