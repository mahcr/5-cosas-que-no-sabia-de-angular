import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Config {
  evento: string
}

export function loadConfig(configService: EnvironmentService) {
  return () => configService.getConfig();
}

@Injectable({
  providedIn: 'root',
})
export class EnvironmentService {
  private static readonly url = 'assets/config.json';
  public config: Config;

  constructor(private http: HttpClient) {}

  public getConfig() {
    return this.http
      .get(EnvironmentService.url)
      .toPromise()
      .then((config: Config) => {
        this.config = config;
        return config;
      })
      .catch((error) => {
        console.error(error);
      });
  }
}
