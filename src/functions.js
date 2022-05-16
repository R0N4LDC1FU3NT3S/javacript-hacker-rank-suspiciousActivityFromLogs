/*
 * Complete the 'processLogs' function below.
 *
 * The function is expected to return a STRING_ARRAY.
 * The function accepts following parameters:
 *  1. STRING_ARRAY logs
 *  2. INTEGER threshold
 */

export function processLogs(logs, threshold) {
    
    let objTemp = {}
    let ret=[]

    console.log(logs.length)

    logs.forEach(
        x=>{
            let item =  x.split(" ")
            if(item[0]!=item[1]) {
                objTemp[item[0]]=objTemp?.[item[0]]+1||1
                objTemp[item[1]]=objTemp?.[item[1]]+1||1
            } else {
                objTemp[item[0]]=objTemp?.[item[0]]+1||1
            }
        }
    )

    Object.values(objTemp).forEach(
        (d,i)=>{
            d>=threshold && ret.push(Object.keys(objTemp)[i])
        }
    )

    return ret

}