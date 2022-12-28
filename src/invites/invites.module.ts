import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Invite } from './entities';
import { InvitesService } from './invites.service';

@Module({
  imports: [TypeOrmModule.forFeature([Invite])],
  providers: [InvitesService],
  exports: [TypeOrmModule],
})
export class InvitesModule {}
