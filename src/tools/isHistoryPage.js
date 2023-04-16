import { usePPTStore } from "../stores/ppt";
const store = usePPTStore();
export function isHistoryPage() {
  if (store.historyPage.includes(store.nowPage.index)) {
    return true;
  }
  return false;
}
