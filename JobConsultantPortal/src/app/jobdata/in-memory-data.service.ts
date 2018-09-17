import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const jobs = [
      {
        id: 1,
        name: 'IT Soft',
        Title : 'Java Eng',
        Date_Posted : '20-8-13',
        Status : 'Open'
      },
      {
        id: 2,
        name: 'Capge',
        Title : 'Dot Net',
        Date_Posted : '20-11-13',
        Status : 'Open'
      }
    ];
    return {jobs};
  }
}
