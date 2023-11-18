import { get } from '@loopback/rest';

export class WelcomeController {
  @get('/welcome')
  hello(): string {
    return 'Welcome to the Loopback API autogenerator!';
  }
}