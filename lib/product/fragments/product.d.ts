export declare const productInfoFragment = "\n  fragment Product on Product {\n    name @include(if: $name)\n    path @include(if: $path)\n    price @include(if: $price)\n    thumbnail @include(if: $thumbnail)\n    description @include(if: $description)\n    sku @include(if: $sku)\n    id\n  }\n";
