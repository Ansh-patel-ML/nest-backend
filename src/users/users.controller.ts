import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';

import { UsersService } from './users.service';
import { User, UserRole } from './types';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  /**
   * @description - returns all the users from the database
   * @returns - all the users
   */
  @Get()
  findMany(@Query('role') role?: UserRole) {
    return this.userService.findMany(role);
  }

  /**
   * @description - returns the specific user object by it's id
   * @param {string} id - Id of the user
   * @returns - user
   */
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(+id);
  }

  /**
   * @description - Add the user to the database
   * @param user - user information
   * @returns
   */
  @Post()
  create(@Body() user: User) {
    return this.userService.create(user);
  }

  /**
   * @description - Update the user inforamtion
   * @param id - Id of the user
   * @param user - information of the user
   * @returns
   */
  @Patch(':id')
  update(@Param('id') id: string, @Body() user: User) {
    console.log('Inside Patch', id);
    return this.userService.update(+id, user);
  }

  /**
   * @description - Delete the user
   * @param id - Id of the user
   * @returns
   */
  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.userService.delete(+id);
  }
}
