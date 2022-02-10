import { Component, OnInit } from '@angular/core';
import { BitcoinsService } from '../shared/bitcoin/bitcoins.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  data: any
  tradeRefs: any = [
    {
      "exchange_id": "GEMINI",
      "url": "https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_32/7be1b1756d8a4f989b9a743df7365119.png"
    },
    {
      "exchange_id": "COINJAR",
      "url": "https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_32/28d1b06a7df04dfcbfb7969006ee0728.png"
    },
    {
      "exchange_id": "FYBSG",
      "url": "https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_32/c9aa79fb2b5f4fc795ec9134ab1c2eb5.png"
    },
    {
      "exchange_id": "UPBIT",
      "url": "https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_32/011989e2cde2433a8c69f79641c255fc.png"
    },
    {
      "exchange_id": "COINSQUARE",
      "url": "https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_32/234b2c2a0e4e41f3a8c4242f91250070.png"
    },
    {
      "exchange_id": "OKCOINCNY",
      "url": "https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_32/32e3f2bd9de742ad8d9241c7f9f43780.png"
    },
    {
      "exchange_id": "1BTCXE",
      "url": "https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_32/19b7b3d18acf4bfdb89280c7d5b890f8.png"
    },
    {
      "exchange_id": "CRYPTOMKT",
      "url": "https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_32/0134cfdca5bf46699e83425fc7a615e9.png"
    },
    {
      "exchange_id": "INDEPENDENTRESERVE",
      "url": "https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_32/39b334d8203f4ed9b0419764e7521a13.png"
    },
    {
      "exchange_id": "BITIBU",
      "url": "https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_32/b90fd7163b184c6fa289a295aa65c2c7.png"
    },
    {
      "exchange_id": "COSS",
      "url": "https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_32/f231d7382689406f9a50dde841418c64.png"
    },
    {
      "exchange_id": "BBX",
      "url": "https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_32/09d375f32b4d499b87c7b228ecd7d49c.png"
    },
    {
      "exchange_id": "COINSPOT",
      "url": "https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_32/0c1e5deae1094edc8f9e1d59c829ea04.png"
    },
    {
      "exchange_id": "XBTCE",
      "url": "https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_32/a07bd7fb5842438d93138ee4ffabdd93.png"
    },
    {
      "exchange_id": "BLEUTRADE",
      "url": "https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_32/c6a223e839914f8585a318a67e881205.png"
    },
    {
      "exchange_id": "IQUANT",
      "url": "https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_32/cc91e555aacc47f791e1cda6cbd5774d.png"
    },
    {
      "exchange_id": "LUNO",
      "url": "https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_32/645063e2008540069bb52cb0c1972af1.png"
    },
    {
      "exchange_id": "HUBI",
      "url": "https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_32/777ae53354f1445da28e23a98cff581f.png"
    },
    {
      "exchange_id": "ZB",
      "url": "https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_32/2539b9bec7c4428493a70540d60b0feb.png"
    },
    {
      "exchange_id": "YUNEX",
      "url": "https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_32/dabeaacd29284f42b2e336a53a901ae9.png"
    },
    {
      "exchange_id": "STEX",
      "url": "https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_32/6d52a233f55840fabd238ad9b6bc59a3.png"
    },
    {
      "exchange_id": "BITKER",
      "url": "https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_32/161fea65308f4e77a41a9d0cc8f08267.png"
    },
    {
      "exchange_id": "TRADEIO",
      "url": "https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_32/2c3b9a2894ed4c0b870a404fef1f9cfe.png"
    },
    {
      "exchange_id": "XS2",
      "url": "https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_32/1324cfc797794a65b042836527c1d7f5.png"
    },
    {
      "exchange_id": "WAZIRX",
      "url": "https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_32/4873707f25fe4de3b4bca6fa5c631011.png"
    },
    {
      "exchange_id": "BITFINEX",
      "url": "https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_32/5a55edecce1949e49aee143a075a8703.png"
    },
    {
      "exchange_id": "ABUCOINS",
      "url": "https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_32/ee91060adfa241abbef9775d67eca7a2.png"
    },
    {
      "exchange_id": "ETHFINEX",
      "url": "https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_32/0684e1244308478e8d174d60682ba4e8.png"
    },
    {
      "exchange_id": "UPBITSG",
      "url": "https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_32/2b838f1b68c2437780f0c3994127a366.png"
    },
    {
      "exchange_id": "COINHUB",
      "url": "https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_32/ffe52b40cd764c12993448eff90703f6.png"
    },
    {
      "exchange_id": "TRADESATOSHI",
      "url": "https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_32/efca6d93caba47c89aa415644c3ca071.png"
    },
    {
      "exchange_id": "COINTIGER",
      "url": "https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_32/679f080aeabb469ebaccfc87f68b8236.png"
    },
    {
      "exchange_id": "BITRABBIT",
      "url": "https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_32/f26a63eac3ec4f81836829e0f635a41c.png"
    },
    {
      "exchange_id": "COINCORNER",
      "url": "https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_32/681731146882426a9a49b0c823088224.png"
    },
    {
      "exchange_id": "LBANK",
      "url": "https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_32/96491e5a72634f838b6199249ffd0dac.png"
    },
    {
      "exchange_id": "LITEBIT",
      "url": "https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_32/5a991ca2abd346e489202eb141479ee6.png"
    },
    {
      "exchange_id": "MERCADOBITCOIN",
      "url": "https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_32/5fbfbd742fb64c67a3963ebd7265f9f3.png"
    },
    {
      "exchange_id": "BITSTAMP",
      "url": "https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_32/667cd27455694a698578c0b049da749d.png"
    },
    {
      "exchange_id": "KYBER",
      "url": "https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_32/026b532bfd67428d89eb37de97b36853.png"
    },
    {
      "exchange_id": "BCEX",
      "url": "https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_32/d00a306dbbb24c5494847d031b0e345b.png"
    },
    {
      "exchange_id": "BTCMARKETS",
      "url": "https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_32/b6a557cc0e884e49b76c052838aae832.png"
    },
    {
      "exchange_id": "BIGONE",
      "url": "https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_32/39770b58b48442298a05d9e5d66e9212.png"
    },
    {
      "exchange_id": "BTCTRADEIM",
      "url": "https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_32/beb89947a3a14d03a6756ec213d0114f.png"
    },
    {
      "exchange_id": "ISX",
      "url": "https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_32/b7395ecf6ad04ebba1baac41516eedc5.png"
    },
    {
      "exchange_id": "COINZEST",
      "url": "https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_32/9ce668ab76744dae876437bc09910f57.png"
    },
    {
      "exchange_id": "OKEX",
      "url": "https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_32/0bbd861eabef4ec48ccead67c8c4a383.png"
    },
    {
      "exchange_id": "CCEX",
      "url": "https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_32/cd8c4f7c40e54b4d876b17791c384544.png"
    },
    {
      "exchange_id": "TRADEOGRE",
      "url": "https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_32/8e020f491f5744e2b17b9945d963132b.png"
    },
    {
      "exchange_id": "STELLARTERM",
      "url": "https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_32/0a4fc7d98bb249c79752043beb05568b.png"
    },
    {
      "exchange_id": "VIRWOX",
      "url": "https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_32/9a9b7bfab56c4319b5048dc9b2f9d223.png"
    },
    {
      "exchange_id": "COINUT",
      "url": "https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_32/178f0922efb44bc7a3dcbb2f60cf43fa.png"
    },
    {
      "exchange_id": "STELLARPORT",
      "url": "https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_32/8d2e5786214144cdba25ee925b0e6898.png"
    },
    {
      "exchange_id": "COINSPRO",
      "url": "https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_32/e1bb738c98844795bd00f5b16d86b30f.png"
    },
    {
      "exchange_id": "HOTBIT",
      "url": "https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_32/8efeffca53074421aeef4cbb8b312c8c.png"
    },
    {
      "exchange_id": "NOVA",
      "url": "https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_32/0e3a9f0b00414a7bace29aa8acce14b6.png"
    },
    {
      "exchange_id": "UPBITID",
      "url": "https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_32/3eea2e57bd7845f19a6b329bba56e5dc.png"
    },
    {
      "exchange_id": "DSX",
      "url": "https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_32/0afb2a797d5348ff855a567cf823c133.png"
    },
    {
      "exchange_id": "CRYPTOMATE",
      "url": "https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_32/f73d1a5484a94694b327830be8b9a12c.png"
    },
    {
      "exchange_id": "SWITCHEO",
      "url": "https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_32/bb536b213a0143b0a41ced4247798057.png"
    },
    {
      "exchange_id": "KOINEX",
      "url": "https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_32/4778fd3b68324e1f93bff5151e3d3b8d.png"
    },
    {
      "exchange_id": "IDCM",
      "url": "https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_32/1e699cf505284aa691179a75e4e61809.png"
    },
    {
      "exchange_id": "BITEXLA",
      "url": "https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_32/8827da51a2aa4401bb0d321cfa7bd3e5.png"
    },
    {
      "exchange_id": "NERAEXPRO",
      "url": "https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_32/365b6872106e4c0dae5ed8da7b5686cb.png"
    },
    {
      "exchange_id": "SIMEX",
      "url": "https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_32/19df2853841445bc9a203bb02761665c.png"
    },
    {
      "exchange_id": "COINBASE",
      "url": "https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_32/54c07e9bf5c140a8ae8d866704a4e393.png"
    },
    {
      "exchange_id": "C2CX",
      "url": "https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_32/b937ed31d7954455ae72cbef25ad3237.png"
    },
    {
      "exchange_id": "UEX",
      "url": "https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_32/4899eed5bf514e09ac27f0a0db853d23.png"
    },
    {
      "exchange_id": "ACX",
      "url": "https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_32/708435c40fb849dd8724601e631d8445.png"
    },
    {
      "exchange_id": "BITBOX",
      "url": "https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_32/3fbc3c25dc964a3a9e9cde7c25c97704.png"
    },
    {
      "exchange_id": "BINANCEJE",
      "url": "https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_32/12706e78b23e41e2afd42eecc28d9bbc.png"
    },
    {
      "exchange_id": "BITMAX",
      "url": "https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_32/b26491362b57458abd94e7c9476e5ba6.png"
    },
    {
      "exchange_id": "OASISDEX",
      "url": "https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_32/66cd43907548462aa7acb1f448e33481.png"
    },
    {
      "exchange_id": "TRXMARKET",
      "url": "https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_32/4d2da05056484484abfa79a468fd2d48.png"
    },
    {
      "exchange_id": "COINGI",
      "url": "https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_32/6ee46e5e6f8b42b890cd999070033517.png"
    },
    {
      "exchange_id": "TOPBTC",
      "url": "https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_32/d6116c0aae974aa781188362d4dd336f.png"
    },
    {
      "exchange_id": "EZBTC",
      "url": "https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_32/f5e79346c4c44c9f87b735c30ec603cd.png"
    },
    {
      "exchange_id": "KRAKEN",
      "url": "https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_32/0fce391a2d564c089735f4e42e0d8d79.png"
    },
    {
      "exchange_id": "BTCTRADE",
      "url": "https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_32/340416c826d7425891ea8e62b99f6651.png"
    },
    {
      "exchange_id": "CRYPTALDASH",
      "url": "https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_32/e400a0bfb8c44513b1a014aad3bc29ee.png"
    },
    {
      "exchange_id": "OKCOINUSD",
      "url": "https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_32/943545dff1b4446394b6c0e4e2c71ce6.png"
    },
    {
      "exchange_id": "VINEX",
      "url": "https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_32/e86d5c329e2142c7a11339b3ff71b0ff.png"
    },
    {
      "exchange_id": "SEEDCX",
      "url": "https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_32/761e435a93f6431b8ebc5d023d52e320.png"
    },
    {
      "exchange_id": "KRAKENFTS",
      "url": "https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_32/0fce391a2d564c089735f4e42e0d8d79.png"
    },
    {
      "exchange_id": "VEBITCOIN",
      "url": "https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_32/08e91dd7d7b7450e815a2bcc62de72d9.png"
    },
    {
      "exchange_id": "BTC38",
      "url": "https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_32/dbee5911f5cd4564a8625647fa59d205.png"
    },
    {
      "exchange_id": "VBTC",
      "url": "https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_32/51a4abba99a142a2901141785778f5df.png"
    },
    {
      "exchange_id": "ETHERFLYER",
      "url": "https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_32/3b82977b73e0434fb807aaf8f18b1027.png"
    },
    {
      "exchange_id": "IDAX",
      "url": "https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_32/c1cbdb78e407476eafefd59324df62dc.png"
    },
    {
      "exchange_id": "BITFOREX",
      "url": "https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_32/32a3ccb439ba4d20b995fd61194c5e18.png"
    },
    {
      "exchange_id": "APHELION",
      "url": "https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_32/566775b2321842faac5c156dfe81705a.png"
    },
    {
      "exchange_id": "BTCC",
      "url": "https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_32/7493a572ca23467385825351d850be46.png"
    },
    {
      "exchange_id": "GRAVIEX",
      "url": "https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_32/28ede9d764e64fb7a1d663ceaa6e66de.png"
    },
    {
      "exchange_id": "MIXCOINS",
      "url": "https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_32/62f291cad0044ed78bbc68d9084e354b.png"
    },
    {
      "exchange_id": "BIBOX",
      "url": "https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_32/04836ff3bc4d4d95820e0155594dca86.png"
    },
    {
      "exchange_id": "BITKONAN",
      "url": "https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_32/0281174edb224caea38e19d8f1da08ac.png"
    },
    {
      "exchange_id": "ZEBPAY",
      "url": "https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_32/7e89e0300d554863a7e577b4e755785d.png"
    },
    {
      "exchange_id": "SISTEMKOIN",
      "url": "https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_32/91ae7fbfc489483facf623cd9606ec20.png"
    },
    {
      "exchange_id": "GBX",
      "url": "https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_32/070e990e26114fd1ad605c7a2fea3963.png"
    },
    {
      "exchange_id": "BITBAY",
      "url": "https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_32/1c3b8c8e7d794821b128e4f4bb6cb0e2.png"
    },
    {
      "exchange_id": "ALLBIT",
      "url": "https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_32/32fb73c379f040a7a66958801facf3d0.png"
    },
    {
      "exchange_id": "BITMART",
      "url": "https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_32/5a749bc3490d44f587810ec2d71877d5.png"
    },
    {
      "exchange_id": "BITFLYERLTNG",
      "url": "https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_32/129bd5d92bc14667bbe72a7c786f4c7e.png"
    },
    {
      "exchange_id": "BITSBLOCKCHAIN",
      "url": "https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_32/6b1578bba4ed4fe79fde4718420ce62f.png"
    },
    {
      "exchange_id": "BTCBOX",
      "url": "https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_32/e4c2a61e468d4f29808280dcca526f59.png"
    },
    {
      "exchange_id": "COINBENE",
      "url": "https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_32/0de5ba9f737048daa3ba17d21954d258.png"
    },
    {
      "exchange_id": "BITLISH",
      "url": "https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_32/40cbe8f456dc4670b89e6480383f75cc.png"
    },
    {
      "exchange_id": "BITVC",
      "url": "https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_32/363f01929f39435d98667cd1b55f2550.png"
    },
    {
      "exchange_id": "GM55",
      "url": "https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_32/469bce7a5ada43c58bbcb9d188eca77f.png"
    },
    {
      "exchange_id": "STRONGHOLD",
      "url": "https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_32/6c69404b04dc4e19801cb25fb6bd657c.png"
    },
    {
      "exchange_id": "ESCODEX",
      "url": "https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_32/6e167c0641594d67acd5a9bb32c2fe28.png"
    },
    {
      "exchange_id": "COINMEX",
      "url": "https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_32/7e2adb9f81934ea1a4a45b4dc98cec22.png"
    },
    {
      "exchange_id": "BITMEX",
      "url": "https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_32/e36f2079c2f340399b58cec837879b74.png"
    },
    {
      "exchange_id": "BL3P",
      "url": "https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_32/a0fc38b64bc94cf38aee9838650ed637.png"
    },
    {
      "exchange_id": "MBAEX",
      "url": "https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_32/bbf22b240a384736b352575f563b7694.png"
    },
    {
      "exchange_id": "BUDA",
      "url": "https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_32/1e734ac419a64d35981dcd359d1c4449.png"
    },
    {
      "exchange_id": "BTCTRADEUA",
      "url": "https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_32/2a8d376ba8b14164bd9afc8ee29e9c5d.png"
    },
    {
      "exchange_id": "COINRATE",
      "url": "https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_32/3623b802c8bd4f6f9b038d9b0697eaf9.png"
    },
    {
      "exchange_id": "CREX24",
      "url": "https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_32/5c0b85b39a1847b4919ad7fca760e97d.png"
    },
    {
      "exchange_id": "RIGHTBTC",
      "url": "https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_32/f2fe67e2d5d84f59a6672950f0ca542b.png"
    },
    {
      "exchange_id": "BW",
      "url": "https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_32/ad08818d681e4b32ac0f54ff92cd200b.png"
    },
    {
      "exchange_id": "DEXTOP",
      "url": "https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_32/854b6ddffca74206a161e5bd8cc5261c.png"
    },
    {
      "exchange_id": "TUX",
      "url": "https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_32/2550c6f3524c467fa58c4827393ae020.png"
    },
    {
      "exchange_id": "INFINITYCOIN",
      "url": "https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_32/fd3de7fd0060418581ddd7c7b3eb3de2.png"
    },
    {
      "exchange_id": "COINNEST",
      "url": "https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_32/36d88962628f4ae9bc9a338205496f57.png"
    },
    {
      "exchange_id": "AIDOSMARKET",
      "url": "https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_32/791e0f404e904c65a5ce3a03b9a4bff6.png"
    },
    {
      "exchange_id": "LIQUI",
      "url": "https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_32/edcb6985b2494c198c3dad3e07aea2d8.png"
    },
    {
      "exchange_id": "MODIAX",
      "url": "https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_32/b8731da5ba3b46e1ade574f8d3e21a11.png"
    },
    {
      "exchange_id": "EXX",
      "url": "https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_32/1c8082f216f1469797c22364451cedea.png"
    },
    {
      "exchange_id": "BITCOINID",
      "url": "https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_32/b7ca2b38048a482b934e1d8782369595.png"
    },
    {
      "exchange_id": "BTCALPHA",
      "url": "https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_32/d83dd9e9173a440da55cf9d7959b029c.png"
    },
    {
      "exchange_id": "BITMARKET",
      "url": "https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_32/9077f69f0a23461d8aa1f24d40ae6120.png"
    },
    {
      "exchange_id": "BHEX",
      "url": "https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_32/10b5f423d84c4aa39a42e3867a5e2984.png"
    },
    {
      "exchange_id": "1BROKER",
      "url": "https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_32/eeb40515565c4ff7b5d8229404064b4a.png"
    },
    {
      "exchange_id": "LOCALTRADE",
      "url": "https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_32/cd9dbf85666440aa8f77de073ae2eae5.png"
    },
    {
      "exchange_id": "CEXIO",
      "url": "https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_32/4b6885cbcf90499dadc2bb78221a5c86.png"
    },
    {
      "exchange_id": "MTGOX",
      "url": "https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_32/841e3dfe79bc443f8e289651e687adc3.png"
    },
    {
      "exchange_id": "SOUTHXCHANGE",
      "url": "https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_32/6b30927b59cf4ef783eb7facf6341932.png"
    },
    {
      "exchange_id": "LYKKE",
      "url": "https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_32/4bcfd3103a0841dc920200c910874bd0.png"
    },
    {
      "exchange_id": "ANXPRO",
      "url": "https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_32/7992b13fc03a45fba759992211f411ee.png"
    },
    {
      "exchange_id": "HUOBI",
      "url": "https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_32/7f9fc543dbf8485689842a47dce439e0.png"
    },
    {
      "exchange_id": "CRYPTONEX",
      "url": "https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_32/ba28d2b256f54e889b1b83c08eef00e5.png"
    },
    {
      "exchange_id": "CRYPTONBTC",
      "url": "https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_32/dfc599212c694a368199f001fdf592b6.png"
    },
    {
      "exchange_id": "BITRUE",
      "url": "https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_32/1e81f9eb427b42cebdbbec21f7ded25b.png"
    },
    {
      "exchange_id": "CRYPTOFACILITIES",
      "url": "https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_32/f744aab66ad243198b3cac74c3aef73b.png"
    },
    {
      "exchange_id": "BITHUMB",
      "url": "https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_32/b813dd662ecb4f53b9c599677bb73b02.png"
    },
    {
      "exchange_id": "KOINIM",
      "url": "https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_32/e2e42c631811410c8bbb464315e9bb9c.png"
    },
    {
      "exchange_id": "COINBIT",
      "url": "https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_32/c992b12837214d7bad38814f571539c5.png"
    },
    {
      "exchange_id": "DRAGONEX",
      "url": "https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_32/cb88f29af32b471c985d6f40fc8f9cdc.png"
    },
    {
      "exchange_id": "COINCHECK",
      "url": "https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_32/d4e3bfc7abaa4b23b02f2a2a977354a3.png"
    },
    {
      "exchange_id": "BANCORNET",
      "url": "https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_32/f865b7d99b2c4d959cd51cb16f6d601d.png"
    },
    {
      "exchange_id": "KORBIT",
      "url": "https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_32/a0676fad975c430985da3c1e0dca2c3c.png"
    },
    {
      "exchange_id": "COINSECURE",
      "url": "https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_32/bfdb827f82564903b2b6434d18121682.png"
    },
    {
      "exchange_id": "WEXNZ",
      "url": "https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_32/f27cd12d9de448449acad8b4b42f40af.png"
    },
    {
      "exchange_id": "B2BX",
      "url": "https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_32/62650e3e57f24a24a124b2fd39f20505.png"
    },
    {
      "exchange_id": "JUBI",
      "url": "https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_32/15c8b63e41834d53aa558a14c2ba2963.png"
    },
    {
      "exchange_id": "AIRSWAP",
      "url": "https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_32/20ddad0b4e4d4ea4ac92237292aa849b.png"
    },
    {
      "exchange_id": "FISCO",
      "url": "https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_32/88e6c1c1ec0a43458a32e484375a3243.png"
    },
    {
      "exchange_id": "INSTANTBITEX",
      "url": "https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_32/2ea95ba47bcb44bdab9f844a33d93c55.png"
    },
    {
      "exchange_id": "GDAC",
      "url": "https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_32/26a237cf028345d69ab888f9c9f53819.png"
    },
    {
      "exchange_id": "EXTSTOCK",
      "url": "https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_32/422f8fda0ab94a7a857c1d85e7d1b631.png"
    },
    {
      "exchange_id": "TIDEX",
      "url": "https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_32/a22e9ad92a0b457a96327f475a365305.png"
    },
    {
      "exchange_id": "BTCCHINA",
      "url": "https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_32/58662da0a7a344fd9f30a488f4ee491b.png"
    },
    {
      "exchange_id": "THEROCKTRADING",
      "url": "https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_32/b6f0b99b06d2414ab80d965bee0870f5.png"
    },
    {
      "exchange_id": "IRIPPLECHINA",
      "url": "https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_32/473debb88f2f40b897b146464469b6ac.png"
    },
    {
      "exchange_id": "THEOCEAN",
      "url": "https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_32/7bb245d8ed5c470595e940f61e2e8e99.png"
    },
    {
      "exchange_id": "ZBG",
      "url": "https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_32/a67f6a81958a41f5bf5d5d62b1839b94.png"
    },
    {
      "exchange_id": "GATEHUB",
      "url": "https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_32/b442b9ee3b6c408db25420890f8de0ea.png"
    },
    {
      "exchange_id": "BTCTURK",
      "url": "https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_32/33450cb323834088bbca73be01c6d99c.png"
    },
    {
      "exchange_id": "RIPPLEFOX",
      "url": "https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_32/a528afa8c5594cafbf65f196816dd181.png"
    },
    {
      "exchange_id": "GATECOIN",
      "url": "https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_32/8c05799ea06d4aabbb79fb660bcc3148.png"
    },
    {
      "exchange_id": "TOKENSTORE",
      "url": "https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_32/8fa741f6eb33464f9a6632302e42df3a.png"
    },
    {
      "exchange_id": "CRYPTOBRIDGE",
      "url": "https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_32/3aaad0d843024f3e8ed70f8875e61aaa.png"
    },
    {
      "exchange_id": "BCOINSG",
      "url": "https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_32/b7c77041cdef4f359b4044b2d73c7741.png"
    },
    {
      "exchange_id": "MERCATOX",
      "url": "https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_32/99904c6527544c469a015b58e8167a1e.png"
    },
    {
      "exchange_id": "BGOGO",
      "url": "https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_32/fcf549a8f75c4ffcba21dc595ee6cc43.png"
    },
    {
      "exchange_id": "BITTYLICIOUS",
      "url": "https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_32/435213ad93794d1f87fdf3154e4aa280.png"
    },
    {
      "exchange_id": "LXDX",
      "url": "https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_32/2c219eb2a1834e6ba8443574140267fd.png"
    },
    {
      "exchange_id": "BITEBTC",
      "url": "https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_32/e8ed7075f123418f85fc0245f3ed5522.png"
    },
    {
      "exchange_id": "FCOIN",
      "url": "https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_32/fe4fe2bbde5c48b19dbe83fe3e7696a5.png"
    },
    {
      "exchange_id": "ZAIF",
      "url": "https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_32/8f524f9837f0403a9351bc94e7df996f.png"
    },
    {
      "exchange_id": "COINFALCON",
      "url": "https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_32/b36288e5dedb444aa65019793102911c.png"
    },
    {
      "exchange_id": "TOKOK",
      "url": "https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_32/e03e0967c81e4099ac06a82be926a907.png"
    },
    {
      "exchange_id": "CASHIEREST",
      "url": "https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_32/10d1667be4fb44a4b561eff8755a6bee.png"
    },
    {
      "exchange_id": "BITBNS",
      "url": "https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_32/5f6335c5ac1c4703a59506f952d93fb6.png"
    },
    {
      "exchange_id": "COINSUPER",
      "url": "https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_32/78c82e9060bd4be5b4411828eb35979e.png"
    },
    {
      "exchange_id": "CHAINCE",
      "url": "https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_32/204e55dd8dab4a0d823c21f04be6be4b.png"
    },
    {
      "exchange_id": "CHBTC",
      "url": "https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_32/42c817bd82a0483eb534c732c6264f53.png"
    },
    {
      "exchange_id": "WAVESPLATFORM",
      "url": "https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_32/a6e122c8e92845e89e44852d6c279e9c.png"
    },
    {
      "exchange_id": "BITBANK",
      "url": "https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_32/7cc7e0edcd7f4fdaa48d2ddaad025e0d.png"
    },
    {
      "exchange_id": "ALLCOIN",
      "url": "https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_32/670d8b962eae40abb44084d47e4098e0.png"
    },
    {
      "exchange_id": "HITBTC",
      "url": "https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_32/b0a5f3418bb247b78fdc46155d63a414.png"
    },
    {
      "exchange_id": "BITSO",
      "url": "https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_32/13c7a54b67d04d78b5e5d40f3ede0a46.png"
    },
    {
      "exchange_id": "COINLIM",
      "url": "https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_32/ef421309dd644c59a5f33507814dcd70.png"
    },
    {
      "exchange_id": "DERIBIT",
      "url": "https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_32/e8766376f8f24d8483af5f0d021986a0.png"
    },
    {
      "exchange_id": "HEATWALLET",
      "url": "https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_32/c187328adfac496f805ad351898ada4f.png"
    },
    {
      "exchange_id": "BITYES",
      "url": "https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_32/b812bd5867d1444faa452be6653216dc.png"
    },
    {
      "exchange_id": "CRYPTOPIA",
      "url": "https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_32/d1538bfb6f91463bbb649737518caa12.png"
    },
    {
      "exchange_id": "RADARRELAY",
      "url": "https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_32/195a39a140bf4c9f99f6a4258d8e5597.png"
    },
    {
      "exchange_id": "ITBIT",
      "url": "https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_32/646278f83c964642b4b219eed27e6074.png"
    },
    {
      "exchange_id": "BITTREX",
      "url": "https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_32/430d0c2db3624ce983702b770293ed3e.png"
    },
    {
      "exchange_id": "BITSANE",
      "url": "https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_32/2972b92a2169473da1e399f1afc9956e.png"
    },
    {
      "exchange_id": "IDEX",
      "url": "https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_32/5029c92e79b44757ae4c12e4a0e5a2d7.png"
    },
    {
      "exchange_id": "NOCKS",
      "url": "https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_32/9352a7afddc8457685f331a444ff06ce.png"
    },
    {
      "exchange_id": "BITFLYER",
      "url": "https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_32/2d2ae028cf0e4812b9e533d6b11b03f7.png"
    },
    {
      "exchange_id": "LAKEBTC",
      "url": "https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_32/5503eb9673f9437988702f06cbd7072b.png"
    },
    {
      "exchange_id": "EXRATES",
      "url": "https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_32/06d87da2466746cd957b2426acdf6fa5.png"
    },
    {
      "exchange_id": "KUNA",
      "url": "https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_32/722546d0371d41b3a1f3373532c2c2ad.png"
    },
    {
      "exchange_id": "COINBE",
      "url": "https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_32/85cf7e70d67d47e1b9027de37002c3a1.png"
    },
    {
      "exchange_id": "TIDEBIT",
      "url": "https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_32/e4000143c82a49dbb2567055bf8ec8bf.png"
    },
    {
      "exchange_id": "HADAX",
      "url": "https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_32/aa28d6f83efc4294bca1a35bd236ea6e.png"
    },
    {
      "exchange_id": "COINROOM",
      "url": "https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_32/aa95418b26a84657b58a89bfd55e6a4f.png"
    },
    {
      "exchange_id": "CATEX",
      "url": "https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_32/a4620a73b98c442893b6a1bd96159280.png"
    },
    {
      "exchange_id": "YOBIT",
      "url": "https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_32/e2124c25c93d4811ad25afd7ee13879c.png"
    },
    {
      "exchange_id": "BTCXIS",
      "url": "https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_32/e8cbafa2a9bf44ee9dfee881038784e7.png"
    },
    {
      "exchange_id": "GOPAX",
      "url": "https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_32/5737ae06f64541618c130b8c9c72fe84.png"
    },
    {
      "exchange_id": "FATBTC",
      "url": "https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_32/55eeb3f5f1414252be0f75f6ef7b4d09.png"
    },
    {
      "exchange_id": "OCEANEX",
      "url": "https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_32/eb0c88fb192c4b79a5fd883b97b8fa60.png"
    },
    {
      "exchange_id": "BISQ",
      "url": "https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_32/57fe804e9c604d17982b659f7283b4eb.png"
    },
    {
      "exchange_id": "BRAZILIEX",
      "url": "https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_32/9b24066a0d8d42d9a8b0c31be4307e3a.png"
    },
    {
      "exchange_id": "LATOKEN",
      "url": "https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_32/5d7efd7ba5e94e03a6b819e8f80beb15.png"
    },
    {
      "exchange_id": "DCOIN",
      "url": "https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_32/a35f9c5c4c1b49c1a63bd0232608f5a9.png"
    },
    {
      "exchange_id": "BILAXY",
      "url": "https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_32/4958c92dbddd4936b1f655e5063dc782.png"
    },
    {
      "exchange_id": "KUCOIN",
      "url": "https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_32/f2e2cab124634c0986723d8df5aec962.png"
    },
    {
      "exchange_id": "GETBTC",
      "url": "https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_32/d6e150a406814a1a875704ae7d48d58e.png"
    },
    {
      "exchange_id": "BIT2C",
      "url": "https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_32/189b2497cf3942af8eeacf74e69c87c6.png"
    },
    {
      "exchange_id": "DOBI",
      "url": "https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_32/b7133bf2551c46c09f0cad05017044b8.png"
    },
    {
      "exchange_id": "BITONIC",
      "url": "https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_32/7ba049e825174051a0c61800f77a746a.png"
    },
    {
      "exchange_id": "INDODAX",
      "url": "https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_32/a23f3b901efe4604bd1373e6e7b22d31.png"
    },
    {
      "exchange_id": "POLONIEX",
      "url": "https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_32/ece226bee0924deb88452b0222007767.png"
    },
    {
      "exchange_id": "FOXBIT",
      "url": "https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_32/af14412292f9448ebd82344d84c2f6e2.png"
    },
    {
      "exchange_id": "FREIEXCHANGE",
      "url": "https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_32/4e41724293db4bd883c2e605a0c9deba.png"
    },
    {
      "exchange_id": "BYTEX",
      "url": "https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_32/f896a8e7dff54e7cbf82ee8a4ace1342.png"
    },
    {
      "exchange_id": "COINDEAL",
      "url": "https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_32/cfc1d982eaa244d7ab3d4447f6d49ef0.png"
    },
    {
      "exchange_id": "RUDEX",
      "url": "https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_32/c108b42c0d48495aacd37c09e8796c79.png"
    },
    {
      "exchange_id": "COINPLACE",
      "url": "https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_32/386c7ea8c7364c3898d038e307ec8f34.png"
    },
    {
      "exchange_id": "VAULTORO",
      "url": "https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_32/f440fe9f4ac54bafb285b6ee559f8d0e.png"
    },
    {
      "exchange_id": "BITCOINTRADE",
      "url": "https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_32/2e3e0133336e486fa2fd6f57754e73e8.png"
    },
    {
      "exchange_id": "CHAOEX",
      "url": "https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_32/c0e860073d65464ca363feb6fed9e2d7.png"
    },
    {
      "exchange_id": "NEGOCIECOINS",
      "url": "https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_32/e52468dbfc5b4e27929336f66c3ebf5b.png"
    },
    {
      "exchange_id": "COINRAIL",
      "url": "https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_32/ff40c74ea9ef47f7a506fe44f0d8afe0.png"
    },
    {
      "exchange_id": "HBDM",
      "url": "https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_32/9204ca863f464a5b844eaaf333eba2be.png"
    },
    {
      "exchange_id": "BITINKA",
      "url": "https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_32/c8ff715192224f41b437fd71c5349311.png"
    },
    {
      "exchange_id": "SATANGPRO",
      "url": "https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_32/9f40ff05940740159be0265cb0f827f7.png"
    },
    {
      "exchange_id": "COINSBANK",
      "url": "https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_32/4495174ba6044042aeb45a95cb52ff5c.png"
    },
    {
      "exchange_id": "URDUBIT",
      "url": "https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_32/197c4a3015bd44a68683f2347ad3f658.png"
    },
    {
      "exchange_id": "CREDOEX",
      "url": "https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_32/9f732cb0b7fa40fdb4023ecdb5362c0b.png"
    },
    {
      "exchange_id": "LIVECOIN",
      "url": "https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_32/dee2fc423dbc4d4db57340839e6e9972.png"
    },
    {
      "exchange_id": "BINANCE",
      "url": "https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_32/74eaad903814407ebdfc3828fe5318ba.png"
    },
    {
      "exchange_id": "FLOWBTC",
      "url": "https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_32/9fd42a0904cd439196c0d520289d0902.png"
    },
    {
      "exchange_id": "COINFLOOR",
      "url": "https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_32/0794a36a64124132983050644c2ac697.png"
    },
    {
      "exchange_id": "KOINEKS",
      "url": "https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_32/a24f128c7f6c4f5eac3fe64c6af736df.png"
    },
    {
      "exchange_id": "EMX",
      "url": "https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_32/d3512e0bb1b24660b689c2731315461a.png"
    },
    {
      "exchange_id": "XENA",
      "url": "https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_32/153f64e780ad4e7f998aa6a98a55b430.png"
    },
    {
      "exchange_id": "CRXZONE",
      "url": "https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_32/a55c7f3f431a4701be816f348306734f.png"
    },
    {
      "exchange_id": "HUOBIPRO",
      "url": "https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_32/dab28fcdd8ba4f3b9c603933be2629a5.png"
    },
    {
      "exchange_id": "ICE3X",
      "url": "https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_32/cbf83ed110c445608dfbfbbe1b7325cd.png"
    },
    {
      "exchange_id": "BXINTH",
      "url": "https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_32/603391d0d54049daa4679fb112549473.png"
    },
    {
      "exchange_id": "COBINHOOD",
      "url": "https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_32/3d0db8b67f2c4f3488fa3f3662811500.png"
    },
    {
      "exchange_id": "NANEX",
      "url": "https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_32/71bcabeaf6a34bb6bf47aca38e2748e9.png"
    },
    {
      "exchange_id": "DIGIFINEX",
      "url": "https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_32/3d47bae3faa3446b879a915e9fc2d020.png"
    },
    {
      "exchange_id": "BITZ",
      "url": "https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_32/9ecc5f7261bd4ff0891fbea0e3085a61.png"
    },
    {
      "exchange_id": "BITSHARES",
      "url": "https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_32/4871361a3f9d4d8abd8e685db7a448ff.png"
    },
    {
      "exchange_id": "EXMO",
      "url": "https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_32/dbd2293b61414818826fbf5225867607.png"
    },
    {
      "exchange_id": "COINALL",
      "url": "https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_32/0f61d0eec94648aca1dfbbde38f85361.png"
    },
    {
      "exchange_id": "COINONE",
      "url": "https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_32/436c09b46e6445c2954dade808384106.png"
    },
    {
      "exchange_id": "TRIPLEDICE",
      "url": "https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_32/f4fa53c0842444eda29203574851a28e.png"
    },
    {
      "exchange_id": "BITKUB",
      "url": "https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_32/abf51276eb5844bba2d3744135873753.png"
    },
    {
      "exchange_id": "CRYPTOLOGY",
      "url": "https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_32/d63e527169d4475c855b9e796f69cda6.png"
    },
    {
      "exchange_id": "COINSBIT",
      "url": "https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_32/5e14f8668a1e47fe882aa886cc008c12.png"
    },
    {
      "exchange_id": "TOKENOMY",
      "url": "https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_32/8030ca3babb44342994c6a57bfa0cd3e.png"
    },
    {
      "exchange_id": "COINMATE",
      "url": "https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_32/84afa30627f44120834cc09bb0a6470e.png"
    },
    {
      "exchange_id": "ABCC",
      "url": "https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_32/3e5c75f0d55141b699cf09a17486baee.png"
    },
    {
      "exchange_id": "BTCX",
      "url": "https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_32/edad323fb8724cd987c81dc17bf14941.png"
    },
    {
      "exchange_id": "DDEX",
      "url": "https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_32/59445fe4441e4a058a84a2c72f728e38.png"
    },
    {
      "exchange_id": "OEX",
      "url": "https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_32/0499b4d7a1aa444dbe2bf11d22058c16.png"
    },
    {
      "exchange_id": "RFINEX",
      "url": "https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_32/03b6104b73d5428aa236d378e815fe84.png"
    },
    {
      "exchange_id": "CPATEX",
      "url": "https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_32/290ac426185240539890470971c1aa21.png"
    },
    {
      "exchange_id": "BITHESAP",
      "url": "https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_32/5ce5e141b1e146ddab78939879282b3a.png"
    },
    {
      "exchange_id": "GATEIO",
      "url": "https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_32/acc2e3a26fbe4c2db511319f9f99ba5a.png"
    },
    {
      "exchange_id": "CHILEBIT",
      "url": "https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_32/83bed1e2839346b88a7f454b88ba1c17.png"
    },
    {
      "exchange_id": "GULDENTRADER",
      "url": "https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_32/0df0ca1b96554286a5c9d5fd4f3ca600.png"
    },
    {
      "exchange_id": "BTER",
      "url": "https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_32/f47d1c8fbc7c4ed7a11589145c9b39bb.png"
    },
    {
      "exchange_id": "QUADRIGACX",
      "url": "https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_32/0c5e973696444125ae7945a6cc24f679.png"
    },
    {
      "exchange_id": "KRYPTONO",
      "url": "https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_32/36c8a3cac4004ba9805244f3b2ad552b.png"
    },
    {
      "exchange_id": "YUNBI",
      "url": "https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_32/836abd766993429abea6841dbf0e8a14.png"
    },
    {
      "exchange_id": "FORKDELTA",
      "url": "https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_32/0165257794684a7ab6507f9a650b29bf.png"
    },
    {
      "exchange_id": "BTCE",
      "url": "https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_32/3b7d5375ac984846938a00894d99ce5c.png"
    },
    {
      "exchange_id": "FYBSE",
      "url": "https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_32/d6489b3eeeca40f487471c3c7282018d.png"
    },
    {
      "exchange_id": "CPDAX",
      "url": "https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_32/3c43e27e9098469c9c5d1a335bb3c469.png"
    }
  ]

  lastesttrad = [
    {
      "symbol_id": "BINANCE_SPOT_HOT_USDT",
      "time_exchange": "2022-02-08T08:49:00.2650000Z",
      "time_coinapi": "2022-02-08T08:49:00.3975768Z",
      "uuid": "8389a966-34ed-4355-b6f8-205604f0dd83",
      "price": 0.005778,
      "size": 69204,
      "taker_side": "BUY"
    },
    {
      "symbol_id": "BINANCE_SPOT_GALA_USDT",
      "time_exchange": "2022-02-08T08:49:00.2640000Z",
      "time_coinapi": "2022-02-08T08:49:00.4086907Z",
      "uuid": "15d16a30-d5b3-4c9a-9e6d-dd4da2ac7946",
      "price": 0.33684,
      "size": 278,
      "taker_side": "BUY"
    },
    {
      "symbol_id": "BINANCE_SPOT_ARDR_USDT",
      "time_exchange": "2022-02-08T08:49:00.2640000Z",
      "time_coinapi": "2022-02-08T08:49:00.4034444Z",
      "uuid": "868b244a-e1df-4562-9298-9d002fe5a635",
      "price": 0.2182,
      "size": 759,
      "taker_side": "BUY"
    },
    {
      "symbol_id": "BINANCE_SPOT_ARDR_USDT",
      "time_exchange": "2022-02-08T08:49:00.2640000Z",
      "time_coinapi": "2022-02-08T08:49:00.4034365Z",
      "uuid": "0545c558-1f28-4123-b846-fc88d4c28cb8",
      "price": 0.2182,
      "size": 119,
      "taker_side": "BUY"
    },
    {
      "symbol_id": "BINANCE_SPOT_ARDR_USDT",
      "time_exchange": "2022-02-08T08:49:00.2640000Z",
      "time_coinapi": "2022-02-08T08:49:00.4034283Z",
      "uuid": "7707e0aa-a679-477e-bc5f-0fc8d6987d33",
      "price": 0.2182,
      "size": 35,
      "taker_side": "BUY"
    },
    {
      "symbol_id": "BYBIT_PERP_SHIB1000_USDT",
      "time_exchange": "2022-02-08T08:49:00.2510000Z",
      "time_coinapi": "2022-02-08T08:49:00.3664027Z",
      "uuid": "a42a6228-7619-4912-b831-4580c9345915",
      "price": 0.03298,
      "size": 21740,
      "taker_side": "SELL"
    },
    {
      "symbol_id": "BINANCE_SPOT_EUR_USDT",
      "time_exchange": "2022-02-08T08:49:00.2500000Z",
      "time_coinapi": "2022-02-08T08:49:00.3864606Z",
      "uuid": "f41609f4-e7a1-46e6-86dd-3fa012053dcd",
      "price": 1.139,
      "size": 524.8,
      "taker_side": "BUY"
    },
    {
      "symbol_id": "BINANCE_SPOT_AXS_USDT",
      "time_exchange": "2022-02-08T08:49:00.2470000Z",
      "time_coinapi": "2022-02-08T08:49:00.3964861Z",
      "uuid": "f8de8eeb-d796-48df-8324-356c4a60cabd",
      "price": 64.73,
      "size": 8.74,
      "taker_side": "SELL"
    },
    {
      "symbol_id": "BINANCE_SPOT_AXS_USDT",
      "time_exchange": "2022-02-08T08:49:00.2470000Z",
      "time_coinapi": "2022-02-08T08:49:00.3961616Z",
      "uuid": "e0d32ad1-30dd-4043-ab90-2204deb6f67d",
      "price": 64.74,
      "size": 0.54,
      "taker_side": "SELL"
    },
    {
      "symbol_id": "KUCOIN_SPOT_ZCX_USDT",
      "time_exchange": "2022-02-08T08:49:00.2430000Z",
      "time_coinapi": "2022-02-08T08:49:00.3785797Z",
      "uuid": "a5a8387c-349d-475e-b2cb-514662ece845",
      "price": 1.456,
      "size": 267.5295,
      "taker_side": "SELL"
    },
    {
      "symbol_id": "BINANCE_SPOT_LRC_USDT",
      "time_exchange": "2022-02-08T08:49:00.2330000Z",
      "time_coinapi": "2022-02-08T08:49:00.3718649Z",
      "uuid": "5297a5e8-fea6-494b-9af6-d34188100276",
      "price": 1.111,
      "size": 222,
      "taker_side": "SELL"
    },
    {
      "symbol_id": "BINANCE_SPOT_GALA_USDT",
      "time_exchange": "2022-02-08T08:49:00.2320000Z",
      "time_coinapi": "2022-02-08T08:49:00.3867397Z",
      "uuid": "6d17720d-d05c-4179-9825-cac9caf209aa",
      "price": 0.33679,
      "size": 1225,
      "taker_side": "BUY"
    },
    {
      "symbol_id": "BYBIT_PERP_ZIL_USDT",
      "time_exchange": "2022-02-08T08:49:00.2250000Z",
      "time_coinapi": "2022-02-08T08:49:00.3803634Z",
      "uuid": "50aa01d4-9769-4534-bb90-3e657a10b8c3",
      "price": 0.0556,
      "size": 3750,
      "taker_side": "BUY"
    },
    {
      "symbol_id": "POLONIEX_SPOT_SNX_USDT",
      "time_exchange": "2022-02-08T08:49:00.2200000Z",
      "time_coinapi": "2022-02-08T08:49:00.3521269Z",
      "uuid": "4b8e2bfe-135f-4758-855e-9cc552021e4c",
      "price": 5.73186726,
      "size": 1.37509999,
      "taker_side": "SELL"
    },
    {
      "symbol_id": "HUOBIPRO_SPOT_ETH_USDT",
      "time_exchange": "2022-02-08T08:49:00.2140000Z",
      "time_coinapi": "2022-02-08T08:49:00.3638709Z",
      "uuid": "a4c42649-00b3-46de-8aa8-6ed6aa0cb06f",
      "price": 3117.31,
      "size": 0.0022,
      "taker_side": "BUY"
    },
    {
      "symbol_id": "BINANCE_SPOT_SAND_BUSD",
      "time_exchange": "2022-02-08T08:49:00.2110000Z",
      "time_coinapi": "2022-02-08T08:49:00.3573941Z",
      "uuid": "09008bb1-c368-4054-b907-64f28102eb3b",
      "price": 4.4726,
      "size": 10,
      "taker_side": "BUY"
    },
    {
      "symbol_id": "GATEIO_SPOT_LRC3L_USDT",
      "time_exchange": "2022-02-08T08:49:00.2100000Z",
      "time_coinapi": "2022-02-08T08:49:00.4130369Z",
      "uuid": "2a930e19-e8f8-443a-990e-35c486653cf7",
      "price": 0.300572,
      "size": 81.875,
      "taker_side": "SELL"
    },
    {
      "symbol_id": "BINANCE_SPOT_IOTX_BUSD",
      "time_exchange": "2022-02-08T08:49:00.2080000Z",
      "time_coinapi": "2022-02-08T08:49:00.3704962Z",
      "uuid": "f63cace7-3d94-4276-b35e-dfc67805c8e9",
      "price": 0.11127,
      "size": 255,
      "taker_side": "BUY"
    },
    {
      "symbol_id": "BINANCE_SPOT_IOTX_BUSD",
      "time_exchange": "2022-02-08T08:49:00.2080000Z",
      "time_coinapi": "2022-02-08T08:49:00.3704878Z",
      "uuid": "2a4634b6-b995-4132-a551-b681fb141124",
      "price": 0.11126,
      "size": 686,
      "taker_side": "BUY"
    },
    {
      "symbol_id": "BINANCE_SPOT_BNB_TRY",
      "time_exchange": "2022-02-08T08:49:00.2080000Z",
      "time_coinapi": "2022-02-08T08:49:00.3546625Z",
      "uuid": "181b9dc3-c825-4d24-a127-6bdd668a7507",
      "price": 5872,
      "size": 0.014,
      "taker_side": "SELL"
    },
    {
      "symbol_id": "BINANCE_SPOT_SAND_USDT",
      "time_exchange": "2022-02-08T08:49:00.2080000Z",
      "time_coinapi": "2022-02-08T08:49:00.3443207Z",
      "uuid": "95c93e5c-b364-4573-9761-4b8f6a7489f9",
      "price": 4.4686,
      "size": 10,
      "taker_side": "SELL"
    },
    {
      "symbol_id": "BINANCE_SPOT_AUD_USDT",
      "time_exchange": "2022-02-08T08:49:00.2080000Z",
      "time_coinapi": "2022-02-08T08:49:00.3412334Z",
      "uuid": "57694570-864b-4898-90f6-a5c50072b995",
      "price": 0.7109,
      "size": 62,
      "taker_side": "BUY"
    },
    {
      "symbol_id": "BINANCE_SPOT_ETHDOWN_USDT",
      "time_exchange": "2022-02-08T08:49:00.2040000Z",
      "time_coinapi": "2022-02-08T08:49:00.3528852Z",
      "uuid": "7d55cb25-702d-47f2-8a7f-c7e2097146dc",
      "price": 0.821,
      "size": 365,
      "taker_side": "SELL"
    },
    {
      "symbol_id": "BINANCE_SPOT_ETHDOWN_USDT",
      "time_exchange": "2022-02-08T08:49:00.2040000Z",
      "time_coinapi": "2022-02-08T08:49:00.3504719Z",
      "uuid": "e3b93523-ae42-4885-a571-4421cf813491",
      "price": 0.8211,
      "size": 335,
      "taker_side": "SELL"
    },
    {
      "symbol_id": "BINANCE_SPOT_GALA_USDT",
      "time_exchange": "2022-02-08T08:49:00.2020000Z",
      "time_coinapi": "2022-02-08T08:49:00.3481272Z",
      "uuid": "b83952cb-9050-4bc5-a156-69965b755791",
      "price": 0.33689,
      "size": 755,
      "taker_side": "BUY"
    },
    {
      "symbol_id": "BINANCE_SPOT_GALA_USDT",
      "time_exchange": "2022-02-08T08:49:00.2020000Z",
      "time_coinapi": "2022-02-08T08:49:00.3480818Z",
      "uuid": "9255f5bb-2995-4804-a571-4fdbb3d710b3",
      "price": 0.33689,
      "size": 99,
      "taker_side": "BUY"
    },
    {
      "symbol_id": "BINANCE_SPOT_GALA_USDT",
      "time_exchange": "2022-02-08T08:49:00.2020000Z",
      "time_coinapi": "2022-02-08T08:49:00.3480791Z",
      "uuid": "c5e9bf1c-6661-4759-b06b-3c4fb557c786",
      "price": 0.33687,
      "size": 1579,
      "taker_side": "BUY"
    },
    {
      "symbol_id": "BINANCE_SPOT_GALA_USDT",
      "time_exchange": "2022-02-08T08:49:00.2020000Z",
      "time_coinapi": "2022-02-08T08:49:00.3480714Z",
      "uuid": "e5b51f30-9733-45ad-8263-67a0c271d1b4",
      "price": 0.33685,
      "size": 1225,
      "taker_side": "BUY"
    },
    {
      "symbol_id": "BINANCE_SPOT_GALA_USDT",
      "time_exchange": "2022-02-08T08:49:00.2020000Z",
      "time_coinapi": "2022-02-08T08:49:00.3480561Z",
      "uuid": "6d137bde-836f-4ef7-a48b-2f2905b7fe7d",
      "price": 0.33684,
      "size": 381,
      "taker_side": "BUY"
    },
    {
      "symbol_id": "BINANCE_SPOT_ADA_USDT",
      "time_exchange": "2022-02-08T08:49:00.2010000Z",
      "time_coinapi": "2022-02-08T08:49:00.3651153Z",
      "uuid": "7fa8fe59-7b48-44d0-bef4-f323c65a272b",
      "price": 1.197,
      "size": 824.2,
      "taker_side": "SELL"
    },
    {
      "symbol_id": "BINANCE_SPOT_ADA_USDT",
      "time_exchange": "2022-02-08T08:49:00.2010000Z",
      "time_coinapi": "2022-02-08T08:49:00.3651032Z",
      "uuid": "dd902134-3e25-41eb-8700-3ef0c7b2d6b1",
      "price": 1.197,
      "size": 136.3,
      "taker_side": "SELL"
    },
    {
      "symbol_id": "BINANCE_SPOT_LRC_USDT",
      "time_exchange": "2022-02-08T08:49:00.2010000Z",
      "time_coinapi": "2022-02-08T08:49:00.3650850Z",
      "uuid": "6fb3fd7d-45fc-4a67-b9a0-d550d47d6924",
      "price": 1.1111,
      "size": 79,
      "taker_side": "SELL"
    },
    {
      "symbol_id": "BINANCE_SPOT_LRC_USDT",
      "time_exchange": "2022-02-08T08:49:00.2010000Z",
      "time_coinapi": "2022-02-08T08:49:00.3650750Z",
      "uuid": "b034991a-9c45-4a9d-a3c5-6974afc54794",
      "price": 1.1111,
      "size": 90,
      "taker_side": "SELL"
    },
    {
      "symbol_id": "BINANCE_SPOT_LRC_USDT",
      "time_exchange": "2022-02-08T08:49:00.2010000Z",
      "time_coinapi": "2022-02-08T08:49:00.3650398Z",
      "uuid": "7f306152-17e8-4ef5-a5cd-412bcab09d18",
      "price": 1.1111,
      "size": 156,
      "taker_side": "SELL"
    },
    {
      "symbol_id": "BINANCE_SPOT_MATIC_BTC",
      "time_exchange": "2022-02-08T08:49:00.2000000Z",
      "time_coinapi": "2022-02-08T08:49:00.3480273Z",
      "uuid": "dbbf5117-be1b-4b09-8feb-d9f4fcfa3c6d",
      "price": 0.00004435,
      "size": 30.6,
      "taker_side": "SELL"
    },
    {
      "symbol_id": "BINANCE_SPOT_MATIC_BTC",
      "time_exchange": "2022-02-08T08:49:00.2000000Z",
      "time_coinapi": "2022-02-08T08:49:00.3467226Z",
      "uuid": "60d41040-4d5d-4d1a-a893-db02fe261ee5",
      "price": 0.00004435,
      "size": 1.5,
      "taker_side": "SELL"
    },
    {
      "symbol_id": "BINANCE_SPOT_SAND_AUD",
      "time_exchange": "2022-02-08T08:49:00.1980000Z",
      "time_coinapi": "2022-02-08T08:49:00.3438989Z",
      "uuid": "6a28eb19-d440-4ae1-8e2f-fa336e91616c",
      "price": 6.2848,
      "size": 10,
      "taker_side": "BUY"
    },
    {
      "symbol_id": "BINANCE_SPOT_DOGE_USDT",
      "time_exchange": "2022-02-08T08:49:00.1920000Z",
      "time_coinapi": "2022-02-08T08:49:00.3466985Z",
      "uuid": "5265bc03-e9a6-4763-b9a0-5fca79294b26",
      "price": 0.1622,
      "size": 278,
      "taker_side": "SELL"
    },
    {
      "symbol_id": "BINANCE_SPOT_SRM_BTC",
      "time_exchange": "2022-02-08T08:49:00.1920000Z",
      "time_coinapi": "2022-02-08T08:49:00.3364306Z",
      "uuid": "1b0a1940-7e28-43dc-8053-413c080f2b77",
      "price": 0.0000575,
      "size": 16.3,
      "taker_side": "SELL"
    },
    {
      "symbol_id": "BYBIT_PERP_SAND_USDT",
      "time_exchange": "2022-02-08T08:49:00.1900000Z",
      "time_coinapi": "2022-02-08T08:49:00.3845630Z",
      "uuid": "3e22d940-cb4f-442a-8827-4c01f194ccc4",
      "price": 4.4678,
      "size": 150,
      "taker_side": "SELL"
    },
    {
      "symbol_id": "BINANCE_SPOT_XRP_BTC",
      "time_exchange": "2022-02-08T08:49:00.1880000Z",
      "time_coinapi": "2022-02-08T08:49:00.3444724Z",
      "uuid": "351ad7eb-ed4f-457d-b2f3-4469e2e47557",
      "price": 0.00001951,
      "size": 42,
      "taker_side": "SELL"
    },
    {
      "symbol_id": "BINANCE_SPOT_BTC_USDC",
      "time_exchange": "2022-02-08T08:49:00.1800000Z",
      "time_coinapi": "2022-02-08T08:49:00.3277529Z",
      "uuid": "c60c14c7-b23e-4f5a-8453-6c9a6f5f7da0",
      "price": 44220.21,
      "size": 0.003,
      "taker_side": "SELL"
    },
    {
      "symbol_id": "BITMEX_PERP_DOGE_USD",
      "time_exchange": "2022-02-08T08:49:00.1790000Z",
      "time_coinapi": "2022-02-08T08:49:00.2134091Z",
      "uuid": "9bcfa75b-287a-4b94-b029-701a82955270",
      "price": 0.16256,
      "size": 8,
      "taker_side": "SELL"
    },
    {
      "symbol_id": "PHEMEX_SPOT_MANA_USDT",
      "time_exchange": "2022-02-08T08:49:00.1770000Z",
      "time_coinapi": "2022-02-08T08:49:00.2780507Z",
      "uuid": "50292a12-cf9c-413e-b797-2f650b196dba",
      "price": 3.18993,
      "size": 46.85,
      "taker_side": "BUY"
    },
    {
      "symbol_id": "PHEMEX_SPOT_BAT_USDT",
      "time_exchange": "2022-02-08T08:49:00.1750000Z",
      "time_coinapi": "2022-02-08T08:49:00.2926146Z",
      "uuid": "bafb90d5-4a78-4eca-8aab-af24afe4092f",
      "price": 0.92031,
      "size": 11.45,
      "taker_side": "BUY"
    },
    {
      "symbol_id": "BINANCE_SPOT_LRC_USDT",
      "time_exchange": "2022-02-08T08:49:00.1750000Z",
      "time_coinapi": "2022-02-08T08:49:00.3536638Z",
      "uuid": "aef5c220-93d3-487b-8297-d4bc5a27df2a",
      "price": 1.1112,
      "size": 841,
      "taker_side": "SELL"
    },
    {
      "symbol_id": "BINANCE_SPOT_LRC_USDT",
      "time_exchange": "2022-02-08T08:49:00.1750000Z",
      "time_coinapi": "2022-02-08T08:49:00.3536539Z",
      "uuid": "b84a2dd4-2ecf-4022-b077-66dac1a54645",
      "price": 1.1112,
      "size": 14,
      "taker_side": "SELL"
    },
    {
      "symbol_id": "BYBIT_PERP_LINK_USDT",
      "time_exchange": "2022-02-08T08:49:00.1740000Z",
      "time_coinapi": "2022-02-08T08:49:00.2965430Z",
      "uuid": "757a1bcc-5218-4f78-b6df-d64b034e87bb",
      "price": 18.451,
      "size": 7.8,
      "taker_side": "BUY"
    },
    {
      "symbol_id": "BINANCE_SPOT_IOTX_USDT",
      "time_exchange": "2022-02-08T08:49:00.1740000Z",
      "time_coinapi": "2022-02-08T08:49:00.3227853Z",
      "uuid": "422f9ef9-ac10-4fb5-8193-e3b74023e850",
      "price": 0.11131,
      "size": 223,
      "taker_side": "BUY"
    },
    {
      "symbol_id": "KUCOIN_SPOT_ZCX_USDT",
      "time_exchange": "2022-02-08T08:49:00.1690000Z",
      "time_coinapi": "2022-02-08T08:49:00.3028614Z",
      "uuid": "c4154221-e328-42c6-b447-51e24d856f1e",
      "price": 1.4558,
      "size": 658.5661,
      "taker_side": "BUY"
    },
    {
      "symbol_id": "BITMEX_PERP_DOGE_USD",
      "time_exchange": "2022-02-08T08:49:00.1680000Z",
      "time_coinapi": "2022-02-08T08:49:00.2044083Z",
      "uuid": "12a8ac0c-b46d-42c8-94d6-fe19f182d0a2",
      "price": 0.16256,
      "size": 7,
      "taker_side": "SELL"
    },
    {
      "symbol_id": "KUCOIN_SPOT_LRC_USDT",
      "time_exchange": "2022-02-08T08:49:00.1680000Z",
      "time_coinapi": "2022-02-08T08:49:00.3226781Z",
      "uuid": "92d0b57d-916d-403b-941b-b48dca5f9804",
      "price": 1.1106,
      "size": 456.3247,
      "taker_side": "SELL"
    },
    {
      "symbol_id": "KUCOIN_SPOT_POLC_USDT",
      "time_exchange": "2022-02-08T08:49:00.1680000Z",
      "time_coinapi": "2022-02-08T08:49:00.3134513Z",
      "uuid": "06e4b4ec-521d-4996-8e40-aaeb87742e9f",
      "price": 0.494,
      "size": 16.2958,
      "taker_side": "BUY"
    },
    {
      "symbol_id": "COINBASE_SPOT_ADA_BTC",
      "time_exchange": "2022-02-08T08:49:00.1654010Z",
      "time_coinapi": "2022-02-08T08:49:00.2317083Z",
      "uuid": "a260baf8-b7e9-4eb1-95ae-a241e98251e8",
      "price": 0.0000271,
      "size": 0.97,
      "taker_side": "BUY"
    },
    {
      "symbol_id": "PHEMEX_SPOT_BCH_USDT",
      "time_exchange": "2022-02-08T08:49:00.1580000Z",
      "time_coinapi": "2022-02-08T08:49:00.2687571Z",
      "uuid": "4db62163-7a66-4ada-9b41-33df27df0aa9",
      "price": 337.71,
      "size": 0.04,
      "taker_side": "SELL"
    },
    {
      "symbol_id": "COINBASE_SPOT_BTC_EUR",
      "time_exchange": "2022-02-08T08:49:00.1575240Z",
      "time_coinapi": "2022-02-08T08:49:00.2311957Z",
      "uuid": "18be1b36-f793-4759-a3f3-a4580e90e69c",
      "price": 38790.64,
      "size": 0.00002591,
      "taker_side": "SELL"
    },
    {
      "symbol_id": "DERIBIT_IDX_BTC_USD",
      "time_exchange": "2022-02-08T08:49:00.1540000Z",
      "time_coinapi": "2022-02-08T08:49:00.1824621Z",
      "uuid": "8ebc9e3a-7b12-4abd-a353-3e89fbad2128",
      "price": 44231.66,
      "size": 0,
      "taker_side": "SELL_ESTIMATED"
    },
    {
      "symbol_id": "BINANCE_SPOT_BTC_USDT",
      "time_exchange": "2022-02-08T08:49:00.1520000Z",
      "time_coinapi": "2022-02-08T08:49:00.3063661Z",
      "uuid": "03bf36b2-c78c-4f88-be11-7a23768c4c90",
      "price": 44192.01,
      "size": 0.01,
      "taker_side": "BUY"
    },
    {
      "symbol_id": "BITSTAMP_SPOT_ETH_USD",
      "time_exchange": "2022-02-08T08:49:00.1510000Z",
      "time_coinapi": "2022-02-08T08:49:00.1785932Z",
      "uuid": "11a064bb-dd8f-40f0-94a4-85772c3b5b9c",
      "price": 3120.18,
      "size": 0.80197846,
      "taker_side": "SELL"
    },
    {
      "symbol_id": "KUCOIN_SPOT_SHIB_USDT",
      "time_exchange": "2022-02-08T08:49:00.1450000Z",
      "time_coinapi": "2022-02-08T08:49:00.2994828Z",
      "uuid": "430d6f6c-d373-4004-9c70-48673d74e723",
      "price": 0.000033,
      "size": 25000000,
      "taker_side": "SELL"
    },
    {
      "symbol_id": "KUCOIN_SPOT_SHIB_USDT",
      "time_exchange": "2022-02-08T08:49:00.1450000Z",
      "time_coinapi": "2022-02-08T08:49:00.2994725Z",
      "uuid": "9ffbc8eb-afd0-4c83-9bbc-f02cfb1cf954",
      "price": 0.000033,
      "size": 25757480.8231,
      "taker_side": "SELL"
    },
    {
      "symbol_id": "HADAX_SPOT_IOTX_USDT",
      "time_exchange": "2022-02-08T08:49:00.1430000Z",
      "time_coinapi": "2022-02-08T08:49:00.3176523Z",
      "uuid": "45e1fbc9-4950-4d32-b864-533bbaae9df8",
      "price": 0.111261,
      "size": 285.54,
      "taker_side": "BUY"
    },
    {
      "symbol_id": "HADAX_SPOT_IOTX_USDT",
      "time_exchange": "2022-02-08T08:49:00.1430000Z",
      "time_coinapi": "2022-02-08T08:49:00.3176523Z",
      "uuid": "ece8ad3b-d226-4614-b67c-d99ed6cf6077",
      "price": 0.111259,
      "size": 102.06,
      "taker_side": "BUY"
    },
    {
      "symbol_id": "HADAX_SPOT_IOTX_USDT",
      "time_exchange": "2022-02-08T08:49:00.1430000Z",
      "time_coinapi": "2022-02-08T08:49:00.3176523Z",
      "uuid": "7579feee-ca9b-4fb0-a734-08c2a2eaf1e7",
      "price": 0.111259,
      "size": 73.93,
      "taker_side": "BUY"
    },
    {
      "symbol_id": "HUOBIPRO_SPOT_IOTX_USDT",
      "time_exchange": "2022-02-08T08:49:00.1430000Z",
      "time_coinapi": "2022-02-08T08:49:00.2764681Z",
      "uuid": "9b127628-bc6f-4603-9556-61f00a94e264",
      "price": 0.111261,
      "size": 285.54,
      "taker_side": "BUY"
    },
    {
      "symbol_id": "HUOBIPRO_SPOT_IOTX_USDT",
      "time_exchange": "2022-02-08T08:49:00.1430000Z",
      "time_coinapi": "2022-02-08T08:49:00.2764681Z",
      "uuid": "6a516096-434e-426f-b26f-e24856314c0f",
      "price": 0.111259,
      "size": 102.06,
      "taker_side": "BUY"
    },
    {
      "symbol_id": "HUOBIPRO_SPOT_IOTX_USDT",
      "time_exchange": "2022-02-08T08:49:00.1430000Z",
      "time_coinapi": "2022-02-08T08:49:00.2764681Z",
      "uuid": "a58aa5d9-d2b3-424e-aff9-cb98e58a8c67",
      "price": 0.111259,
      "size": 73.93,
      "taker_side": "BUY"
    },
    {
      "symbol_id": "COINBASE_SPOT_SOL_GBP",
      "time_exchange": "2022-02-08T08:49:00.1413500Z",
      "time_coinapi": "2022-02-08T08:49:00.2094068Z",
      "uuid": "4b337051-8f46-4d6b-acd9-edd82487724f",
      "price": 85.1,
      "size": 10.272,
      "taker_side": "SELL"
    },
    {
      "symbol_id": "KUCOIN_SPOT_ISP_USDT",
      "time_exchange": "2022-02-08T08:49:00.1400000Z",
      "time_coinapi": "2022-02-08T08:49:00.2943796Z",
      "uuid": "97011ac3-b1c3-48f4-8033-27051ad183bb",
      "price": 0.003753,
      "size": 3686.7303,
      "taker_side": "SELL"
    },
    {
      "symbol_id": "HADAX_SPOT_ETH_BTC",
      "time_exchange": "2022-02-08T08:49:00.1330000Z",
      "time_coinapi": "2022-02-08T08:49:00.2693287Z",
      "uuid": "34f43168-06da-4c7b-9751-18e8309eec1f",
      "price": 0.070532,
      "size": 0.0585,
      "taker_side": "BUY"
    },
    {
      "symbol_id": "HUOBIPRO_SPOT_ETH_BTC",
      "time_exchange": "2022-02-08T08:49:00.1330000Z",
      "time_coinapi": "2022-02-08T08:49:00.3054381Z",
      "uuid": "147f34d2-2084-4afb-b4db-7ad1a42cf067",
      "price": 0.070532,
      "size": 0.0585,
      "taker_side": "BUY"
    },
    {
      "symbol_id": "CRYPTOCOM_SPOT_NU_USDC",
      "time_exchange": "2022-02-08T08:49:00.1320000Z",
      "time_coinapi": "2022-02-08T08:49:00.3012133Z",
      "uuid": "21a5da50-5e2a-4776-8f5d-d2da9c9c0294",
      "price": 0.5368,
      "size": 4.22,
      "taker_side": "BUY"
    },
    {
      "symbol_id": "KUCOIN_SPOT_KAI_USDT",
      "time_exchange": "2022-02-08T08:49:00.1320000Z",
      "time_coinapi": "2022-02-08T08:49:00.2655448Z",
      "uuid": "698a4c01-e2f8-48bd-85b3-98212f0039f8",
      "price": 0.0473034,
      "size": 257.77350676,
      "taker_side": "BUY"
    },
    {
      "symbol_id": "BINANCE_SPOT_BNB_BTC",
      "time_exchange": "2022-02-08T08:49:00.1310000Z",
      "time_coinapi": "2022-02-08T08:49:00.2911272Z",
      "uuid": "3316affa-ca64-4b2b-bdc8-0bc2769f704a",
      "price": 0.009715,
      "size": 0.737,
      "taker_side": "BUY"
    },
    {
      "symbol_id": "BINANCE_SPOT_BNB_BTC",
      "time_exchange": "2022-02-08T08:49:00.1310000Z",
      "time_coinapi": "2022-02-08T08:49:00.2911215Z",
      "uuid": "6aaaec82-c352-4ec6-ba96-2a784d021482",
      "price": 0.009715,
      "size": 0.629,
      "taker_side": "BUY"
    },
    {
      "symbol_id": "BINANCE_SPOT_BNB_BTC",
      "time_exchange": "2022-02-08T08:49:00.1310000Z",
      "time_coinapi": "2022-02-08T08:49:00.2911156Z",
      "uuid": "f93f6c95-3875-48a8-9714-032f2bc86538",
      "price": 0.009715,
      "size": 1.256,
      "taker_side": "BUY"
    },
    {
      "symbol_id": "COINBASE_SPOT_DOT_USD",
      "time_exchange": "2022-02-08T08:49:00.1281630Z",
      "time_coinapi": "2022-02-08T08:49:00.1937945Z",
      "uuid": "eb12d4d1-c192-477a-9758-27cc7bd25bdc",
      "price": 21.9,
      "size": 0.635,
      "taker_side": "BUY"
    },
    {
      "symbol_id": "COINBASE_SPOT_DOT_USD",
      "time_exchange": "2022-02-08T08:49:00.1281630Z",
      "time_coinapi": "2022-02-08T08:49:00.1937849Z",
      "uuid": "6f2f8518-5983-44a1-8f32-b5b9fc0ac495",
      "price": 21.9,
      "size": 3.771,
      "taker_side": "BUY"
    },
    {
      "symbol_id": "BINANCE_SPOT_IOTX_USDT",
      "time_exchange": "2022-02-08T08:49:00.1240000Z",
      "time_coinapi": "2022-02-08T08:49:00.2905375Z",
      "uuid": "7937e3fb-6d13-44ae-9dc7-4d17e7ac90bb",
      "price": 0.11131,
      "size": 4107,
      "taker_side": "BUY"
    },
    {
      "symbol_id": "BINANCE_SPOT_EGLD_USDT",
      "time_exchange": "2022-02-08T08:49:00.1230000Z",
      "time_coinapi": "2022-02-08T08:49:00.2910797Z",
      "uuid": "63698b6b-57e9-4f85-9aff-4bcc29d3f9ae",
      "price": 177.05,
      "size": 2,
      "taker_side": "SELL"
    },
    {
      "symbol_id": "GATEIO_SPOT_SLP_USDT",
      "time_exchange": "2022-02-08T08:49:00.1230000Z",
      "time_coinapi": "2022-02-08T08:49:00.4183876Z",
      "uuid": "58327c2a-1c9b-4400-b495-24acf630547e",
      "price": 0.02043,
      "size": 107.28,
      "taker_side": "BUY"
    },
    {
      "symbol_id": "HUOBIFTS_PERP_SHIB_USDT",
      "time_exchange": "2022-02-08T08:49:00.1220000Z",
      "time_coinapi": "2022-02-08T08:49:00.3245501Z",
      "uuid": "2add9280-2cc3-4bee-b4c7-5fe0af57119f",
      "price": 0.00003298,
      "size": 238796,
      "taker_side": "SELL"
    },
    {
      "symbol_id": "HUOBIFTS_PERP_SHIB_USDT",
      "time_exchange": "2022-02-08T08:49:00.1220000Z",
      "time_coinapi": "2022-02-08T08:49:00.3245291Z",
      "uuid": "77617410-6460-43da-b394-3f8eca3c576b",
      "price": 0.00003298,
      "size": 280,
      "taker_side": "SELL"
    },
    {
      "symbol_id": "HUOBIFTS_PERP_SHIB_USDT",
      "time_exchange": "2022-02-08T08:49:00.1220000Z",
      "time_coinapi": "2022-02-08T08:49:00.3245291Z",
      "uuid": "8bc40039-2f35-4aec-bd62-5fb310c5a904",
      "price": 0.00003298,
      "size": 244,
      "taker_side": "SELL"
    },
    {
      "symbol_id": "HUOBIFTS_PERP_SHIB_USDT",
      "time_exchange": "2022-02-08T08:49:00.1220000Z",
      "time_coinapi": "2022-02-08T08:49:00.3245291Z",
      "uuid": "984304b1-00c3-4a15-96ca-769150ef75e5",
      "price": 0.00003298,
      "size": 600,
      "taker_side": "SELL"
    },
    {
      "symbol_id": "HUOBIFTS_PERP_SHIB_USDT",
      "time_exchange": "2022-02-08T08:49:00.1220000Z",
      "time_coinapi": "2022-02-08T08:49:00.3245291Z",
      "uuid": "765eafc7-c268-4a0d-badb-a95a7abdc2ed",
      "price": 0.00003298,
      "size": 27668,
      "taker_side": "SELL"
    },
    {
      "symbol_id": "HUOBIFTS_PERP_SHIB_USDT",
      "time_exchange": "2022-02-08T08:49:00.1220000Z",
      "time_coinapi": "2022-02-08T08:49:00.3245291Z",
      "uuid": "d17a85f0-cd96-4595-81e8-02b4ee8e2dea",
      "price": 0.00003298,
      "size": 4,
      "taker_side": "SELL"
    },
    {
      "symbol_id": "HUOBIFTS_PERP_SHIB_USDT",
      "time_exchange": "2022-02-08T08:49:00.1220000Z",
      "time_coinapi": "2022-02-08T08:49:00.3245291Z",
      "uuid": "a23fd5ea-a84d-471f-9214-bc1eb55986c8",
      "price": 0.00003298,
      "size": 291204,
      "taker_side": "SELL"
    },
    {
      "symbol_id": "COINBASE_SPOT_DOT_BTC",
      "time_exchange": "2022-02-08T08:49:00.1208670Z",
      "time_coinapi": "2022-02-08T08:49:00.1868961Z",
      "uuid": "84dbd0de-e949-4451-991b-612ecbfed83e",
      "price": 0.0004947,
      "size": 10.983,
      "taker_side": "SELL"
    },
    {
      "symbol_id": "COINBASE_SPOT_DOT_BTC",
      "time_exchange": "2022-02-08T08:49:00.1208670Z",
      "time_coinapi": "2022-02-08T08:49:00.1868876Z",
      "uuid": "9c1c4a02-e1f9-4d4f-9bd6-14e6e5fa8a5d",
      "price": 0.0004947,
      "size": 77.278,
      "taker_side": "SELL"
    },
    {
      "symbol_id": "DERIBIT_PERP_ETH_USD",
      "time_exchange": "2022-02-08T08:49:00.1200000Z",
      "time_coinapi": "2022-02-08T08:49:00.1649103Z",
      "uuid": "3a11ae15-d095-4460-90e4-fa28561e4830",
      "price": 3119,
      "size": 276,
      "taker_side": "SELL"
    },
    {
      "symbol_id": "COINBASE_SPOT_ALGO_GBP",
      "time_exchange": "2022-02-08T08:49:00.1172220Z",
      "time_coinapi": "2022-02-08T08:49:00.1867833Z",
      "uuid": "2a7fb8dd-f3d1-457f-b720-8e74b0285d59",
      "price": 0.7685,
      "size": 10,
      "taker_side": "BUY"
    },
    {
      "symbol_id": "BINANCE_SPOT_GALA_USDT",
      "time_exchange": "2022-02-08T08:49:00.1150000Z",
      "time_coinapi": "2022-02-08T08:49:00.2869333Z",
      "uuid": "1c4a5c8a-c626-44c7-bc9e-827ed131d27f",
      "price": 0.33673,
      "size": 1000,
      "taker_side": "SELL"
    },
    {
      "symbol_id": "BINANCE_SPOT_EGLD_BUSD",
      "time_exchange": "2022-02-08T08:49:00.1120000Z",
      "time_coinapi": "2022-02-08T08:49:00.2587595Z",
      "uuid": "71afc8a6-a5a0-4767-afa1-0e161621c619",
      "price": 177.23,
      "size": 0.49,
      "taker_side": "SELL"
    },
    {
      "symbol_id": "BINANCE_SPOT_SHIB_BUSD",
      "time_exchange": "2022-02-08T08:49:00.1100000Z",
      "time_coinapi": "2022-02-08T08:49:00.2803694Z",
      "uuid": "ba4aedee-e6c0-421d-abea-acc0c56a0720",
      "price": 0.00003302,
      "size": 6749615,
      "taker_side": "SELL"
    },
    {
      "symbol_id": "BINANCE_SPOT_SHIB_BUSD",
      "time_exchange": "2022-02-08T08:49:00.1100000Z",
      "time_coinapi": "2022-02-08T08:49:00.2803614Z",
      "uuid": "789a06be-6963-40e8-8840-97084c8b861b",
      "price": 0.00003302,
      "size": 4901035,
      "taker_side": "SELL"
    },
    {
      "symbol_id": "POLONIEX_SPOT_ETH_USDT",
      "time_exchange": "2022-02-08T08:49:00.1080000Z",
      "time_coinapi": "2022-02-08T08:49:00.2155454Z",
      "uuid": "1782982f-e212-4de5-b147-c52db44a8778",
      "price": 3116.90635945,
      "size": 0.00189036,
      "taker_side": "SELL"
    },
    {
      "symbol_id": "KUCOIN_SPOT_SHILL_USDT",
      "time_exchange": "2022-02-08T08:49:00.1070000Z",
      "time_coinapi": "2022-02-08T08:49:00.2723379Z",
      "uuid": "e824f153-a125-4e4f-bc00-adc75e429096",
      "price": 0.2239,
      "size": 208.4756,
      "taker_side": "BUY"
    },
    {
      "symbol_id": "HUOBIFTS_PERP_AXS_USDT",
      "time_exchange": "2022-02-08T08:49:00.1030000Z",
      "time_coinapi": "2022-02-08T08:49:00.2750696Z",
      "uuid": "cd5406ac-a079-4898-88de-eedc30c7fede",
      "price": 64.5623,
      "size": 120,
      "taker_side": "SELL"
    },
    {
      "symbol_id": "BINANCE_SPOT_USDC_USDT",
      "time_exchange": "2022-02-08T08:49:00.1030000Z",
      "time_coinapi": "2022-02-08T08:49:00.2902880Z",
      "uuid": "fdae1ef4-944d-4312-9172-8720c27cbcb7",
      "price": 0.9992,
      "size": 191,
      "taker_side": "BUY"
    }
  ]

  title = 'stocks';
  p: number = 1;
  searchTerm: any

  constructor(private _bitcon: BitcoinsService) { }
  ngOnInit(): void {
    this._bitcon.getExchages().subscribe(res => {
        this._bitcon.storeExchanges({ exchange_id: res.toString()}).subscribe(() => console.log(
          "stored"
        )
        )
    })

  }

  getAllData() {
    this._bitcon.getMyDbStockData().subscribe((res) => this.data = res)
    this._bitcon.getMyDbStockData().subscribe((res) => console.log(res))
  }

}
