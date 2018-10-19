// tslint:disable
import { Get, Controller, Req, Res, Query, HttpStatus } from '@nestjs/common';

@Controller()
export class AppController {
  @Get('/slack-integrations')
  async root(
    @Req() req,
    @Res() res,
    @Query() query
  ): Promise<any> {
    console.log(
      query.date,
      query.to,
      query.from,
      query.employee
    );

    return res.status(HttpStatus.OK).json([]);
  }
}
