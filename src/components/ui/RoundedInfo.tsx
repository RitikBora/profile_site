export const RoundedInfo = ({innerText} : {innerText : string}) =>
{
  return(
    <div className="dark:bg-neutral-700 rounded-lg inline-flex px-3 py-1 text-xs">
        {innerText}
    </div>
  )
}