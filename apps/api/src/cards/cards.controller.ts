import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import type { AuthUser } from '../auth/current-user.decorator';
import { CurrentUser } from '../auth/current-user.decorator';
import { CardsService } from './cards.service';

// @UseGuards na classe protege todos os endpoints do controller com JWT.
// Qualquer request sem token válido recebe 401 antes de chegar ao método.
@Controller('cards')
@UseGuards(AuthGuard('jwt'))
export class CardsController {
  constructor(private readonly cardsService: CardsService) {}

  @Get()
  findAll(@CurrentUser() user: AuthUser): Promise<any[]> {
    return this.cardsService.findAll(user.companyId, user.role, user.email);
  }
}