import { Controller, Get, Param, Post, Body, Delete, Put, Patch } from '@nestjs/common';
import { EpiService } from '../service/epi.service';


@Controller('epis') // rota padrão
export class EpiController {
  constructor(private readonly epiService: EpiService) { }

  @Get()
  getDados() {
    return this.epiService.getDados()
  }

  @Get(':id')
  getEpi(@Param('id') id: string) {
    return this.epiService.getEpiById(Number(id));
  }

  @Post() // responde ao POST /epis
  create(@Body() body: { nome: string; tipo: string }) {
    return this.epiService.create(body);
  }

  @Delete(':id')
  delete(@Param('id') id: string) { return this.epiService.delete(Number(id)); }
  //Mudamos o método  (DELETE). A rota epis é padrão, e o id 3 indica o registro apagado

  @Put(':id') // → PUT (id) localhost:3000/epis/
  update(@Param('id') id: string, @Body() body: any) { return this.epiService.update(Number(id), body); }

  @Patch(':id') // → PATCH (id) localhost:3000/epis/
  patch(@Param('id') id: string, @Body() body: any) { return this.epiService.patch(Number(id), body); }
}