import { Injectable } from "@angular/core";
import { IArtist } from "./artist";
import { Observable } from "rxjs/Observable";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import 'rxjs/add/operator/catch';

@Injectable()
export class ArtistService {
    artists: IArtist[];
    artistUrl: string = "./api/artists/artists.json";
    constructor(private _http: HttpClient) { }

    getArtists(): Observable<IArtist[]> {
        return this._http.get<IArtist[]>(this.artistUrl)
            .catch(this.HandleError);
    }

    private HandleError(err: HttpErrorResponse) {
        return Observable.throw(err.message);
    }
}