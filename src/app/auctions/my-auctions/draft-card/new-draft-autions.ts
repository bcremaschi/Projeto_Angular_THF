//Cria um objeto de interface, com os campos de retorno da API de Get Auctions.
export interface NewDraftAuctions {
  hasNext: boolean;
  auctions: [{
    _id: string;
    name: string;
    photo: string;
    base_price: number;
    bid_type: number;
    bid_step: number;
    status: number;
    owner: string;
    bids: [];
    createdAt: Date;
    updatedAt: Date;
    __v: number;
  }];
}
