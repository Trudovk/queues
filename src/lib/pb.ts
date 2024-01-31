import PocketBase from "pocketbase";
import type { TypedPocketBase } from "./pocketbase-types";

export const pb = new PocketBase(
  "https://pocketbase-xwkkcw0.fjx.su"
) as TypedPocketBase;
pb.autoCancellation(false);
