import { HistoryContainer, HistoryList, Status } from './styles'

export function History() {
  return (
    <HistoryContainer>
      <h1>Meu Histórico</h1>

      <HistoryList>
        <table>
          <thead>
            <tr>
              <th>Tarefa</th>
              <th>Duração</th>
              <th>Inicio</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {[1, 2, 3, 4, 5].map((i) => {
              return (
                <tr key={Math.random()}>
                  <td>Tarefa</td>
                  <td>20 min</td>
                  <td>há dois meses</td>
                  <td>
                    <Status statusColor="green">Concluído</Status>{' '}
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </HistoryList>
    </HistoryContainer>
  )
}
