import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query,
  ValidationPipe,
} from '@nestjs/common';

import { UsersService } from './users.service';
import { CreateUserDTO } from './dto/createUser.dto';
import { UpdateUserDTO } from './dto/updateUser.dto';
import { UserRole } from './types';

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
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.userService.findOne(id);
  }

  /**
   * @description - Add the user to the database
   * @param user - user information
   * @returns
   */
  @Post()
  create(@Body(ValidationPipe) createUserDTO: CreateUserDTO) {
    return this.userService.create(createUserDTO);
  }

  /**
   * @description - Update the user inforamtion
   * @param id - Id of the user
   * @param user - information of the user
   * @returns
   */
  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body(ValidationPipe) updateUserDTO: UpdateUserDTO,
  ) {
    return this.userService.update(id, updateUserDTO);
  }

  /**
   * @description - Delete the user
   * @param id - Id of the user
   * @returns
   */
  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.userService.delete(id);
  }
}
