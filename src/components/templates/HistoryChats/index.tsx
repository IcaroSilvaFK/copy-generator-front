export function Console() {
  console.log('a')
}
// import { formatDistanceToNow } from 'date-fns'
// import ptBr from 'date-fns/locale/pt-BR'
// import { useAtom } from 'jotai'
// import axios from 'axios'

// import { historyCopyAtom } from '../../../atoms/requestedCopyAtom'
// import { Container } from './styles'

// interface IRequestCopyProps {
//   messages: {
//     createdAt: string
//     generatedCopy: string
//     copyTitle: string
//   }[]
// }

// interface IHistoryChatsProps {
//   copys: {
//     description: string
//     createdAt: string
//     id: string
//     copyTitle: string
//   }[]
// }

// export function HistoryChats(props: IHistoryChatsProps) {
//   const { copys } = props
//   const [, setCopys] = useAtom(historyCopyAtom)

//   async function handleRequestHistoryFromCopy(id: string) {
//     try {
//       const { data } = await axios.get<IRequestCopyProps>(`/api/copy/${id}`)

//       const mappedCopys = data.messages.map((cop) => ({
//         createdAt: new Date(cop.createdAt).toISOString(),
//         description: cop.generatedCopy,
//         title: cop.copyTitle,
//       }))

//       setCopys(mappedCopys)
//     } catch (err) {
//       console.log(err)
//     }
//   }

//   return (
//     <Container>
//       <header>
//         <h3>Hitórico de copy</h3>
//       </header>
//       <ul>
//         {copys?.map((historic) => (
//           <li
//             key={historic.copyTitle}
//             onClick={() => handleRequestHistoryFromCopy(historic.id)}
//           >
//             <header>
//               <b>{historic.description}</b>
//               <span>
//                 {formatDistanceToNow(new Date(historic.createdAt), {
//                   locale: ptBr,
//                   addSuffix: true,
//                 })}
//               </span>
//             </header>
//             <p>{historic.description}</p>
//           </li>
//         ))}
//       </ul>
//     </Container>
//   )
// }
