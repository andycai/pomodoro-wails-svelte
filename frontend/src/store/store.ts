import { get, writable } from "svelte/store";
import { DefaultBreakDuration, DefaultWorkDuration, Keys, MagicNumber, Status, Tasks, WorkType } from "../config";
import { getIntDefault, saveItem } from "./local";
import { themeNum } from "../style";

export const timer = {
  id: null
}
export const count = writable(0)
export const status = writable(Status.Idle)
export const workType = writable(WorkType.Work)
export const daykey = writable(Keys.today())
export const today = writable(0)
export const total = writable(0)
export const theme = writable(0)

export const action = {
  initData: (td: number, tt: number, c: number) => {
    count.set(c)
    today.set(td)
    total.set(tt)
    theme.set(Math.floor(td / MagicNumber))
  },
  countdown: () => {
    if (get(count) === 0) {
      status.set(Status.Idle)
      if (get(workType) === WorkType.Work) {
        today.update(t => t + 1)
        total.update(t => t + 1)
        if (get(today) % MagicNumber === 0) {
          action.changeTheme()
        }
        workType.set(WorkType.Break)
        count.set(getIntDefault(Keys.defaultBreakDuration, DefaultBreakDuration))
        // 当天数量本地保存
        // console.log("daykey", get(daykey))
        // console.log("today key", Keys.today())
        if (get(daykey) === Keys.today()) { // 当天
          saveItem(Keys.today(), get(today).toString())
        } else {
          daykey.set(Keys.today())
          today.set(1) // 隔天更新
        }
        // 总数本地保存
        saveItem(Keys.total(Tasks.default), get(total).toString())
      } else {
        workType.set(WorkType.Work)
        count.set(getIntDefault(Keys.defaultWorkDuration, DefaultWorkDuration))
      }
      return
    }
    count.update(c => c - 1);
  },
  tick: () => {
    if (get(status) !== Status.Tick) {
      status.set(Status.Tick)
    } else {
      status.set(Status.Pause)
    }
  },
  reset: () => {
    count.set(getIntDefault(Keys.defaultWorkDuration, DefaultWorkDuration))
    status.set(Status.Idle)
    workType.set(WorkType.Work)
  },
  changeTheme: () => {
    theme.update(t => (t + 1) % themeNum)
  }
}