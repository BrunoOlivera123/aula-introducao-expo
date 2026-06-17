import { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';

import styles from './styles';

function Square({ value, onSquareClick }) {
    return (
        <TouchableOpacity style={styles.square} onPress={onSquareClick}>
            <Text style={styles.mensagem}>{value}</Text>
        </TouchableOpacity>
    );
}

function Board({ xIsNext, squares, onPlay, disabled }) {

    function handleClick(i) {
        if (disabled) return;
        if (calculateWinner(squares) || squares[i]) {
            return;
        }
        const nextSquares = squares.slice();
        if (xIsNext) {
            nextSquares[i] = 'X';
        } else {
            nextSquares[i] = 'O';
        }
        onPlay(nextSquares);
    }

    const winner = calculateWinner(squares);
    let status;
    if (winner) {
        status = 'Vencedor: ' + winner;
    } else if (squares.every(Boolean)) {
        status = 'Empate';
    } else {
        status = 'Próximo jogador: ' + (xIsNext ? 'X' : 'O');
    }

    return (
        <>
            <Text style={styles.status}>{status}</Text>
            <View style={styles.boardRow}>
                <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
                <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
                <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
            </View>
            <View style={styles.boardRow}>
                <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
                <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
                <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
            </View>
            <View style={styles.boardRow}>
                <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
                <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
                <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
            </View>
        </>
    );
}

function Game({ opponent, player1, player2, onBackToHome, stats, setStats }) {
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const [currentMove, setCurrentMove] = useState(0);
    const xIsNext = currentMove % 2 === 0;
    const currentSquares = history[currentMove];

    // When playing against machine, machine is O and moves randomly on its turn
    useEffect(() => {
        const winner = calculateWinner(currentSquares);
        if (opponent === 'machine' && !winner && !xIsNext) {
            // machine's turn (O)
            const emptyIndexes = currentSquares.map((v, i) => v ? null : i).filter(i => i !== null);
            if (emptyIndexes.length === 0) return;
            const choice = emptyIndexes[Math.floor(Math.random() * emptyIndexes.length)];
            const nextSquares = currentSquares.slice();
            nextSquares[choice] = 'O';
            // slight delay to simulate thinking
            const t = setTimeout(() => handlePlay(nextSquares), 300);
            return () => clearTimeout(t);
        }
    }, [currentSquares, xIsNext, opponent]);

    function handlePlay(nextSquares) {
        const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
        setHistory(nextHistory);
        setCurrentMove(nextHistory.length - 1);

        const winner = calculateWinner(nextSquares);
        if (winner) {
            const winnerName = winner === 'X' ? player1 : player2;
            // update stats: wins, games, streaks
            setStats(prev => {
                const wins = { ...prev.wins };
                if (winner === 'X') wins.p1 += 1; else wins.p2 += 1;
                const games = prev.games + 1;
                const draws = prev.draws;
                // streak logic
                let currentStreak = { ...prev.currentStreak };
                if (prev.currentStreak.player === winnerName) {
                    currentStreak.count += 1;
                } else {
                    currentStreak = { player: winnerName, count: 1 };
                }
                let longestStreak = { ...prev.longestStreak };
                if (currentStreak.count > (longestStreak.count || 0)) {
                    longestStreak = { player: winnerName, count: currentStreak.count, vsMachine: (opponent === 'machine') };
                }
                return { wins, games, draws, currentStreak, longestStreak };
            });
        } else if (nextSquares.every(Boolean)) {
            // draw
            setStats(prev => ({ ...prev, draws: prev.draws + 1, games: prev.games + 1 }));
            // reset currentStreak
            setStats(prev => ({ ...prev, currentStreak: { player: null, count: 0 } }));
        }
    }

    function jumpTo(nextMove) {
        if (nextMove === 0) {
            setHistory([Array(9).fill(null)]);
            setCurrentMove(0);
            return;
        }
        setCurrentMove(nextMove);
    }

    const moves = history.map((squares, move) => {
        let description;
        if (move > 0) {
            description = 'Volte para o movimento #' + move;
        } else {
            description = 'Iniciar novo jogo';
        }
        return (
            <TouchableOpacity
                onPress={() => jumpTo(move)}
                key={move}
                style={move === 0 ? styles.btnReiniciar : null}
            >
                <Text
                    style={[styles.historico, move === 0 ? { color: '#ffffff' } : null]}
                >{description}</Text>
            </TouchableOpacity>
        );
    });

    return (
        <View style={styles.game}>
            <View style={styles.headerRow}>
                <Text style={styles.playerLabel}>{player1} (X)</Text>
                <Text style={styles.playerLabel}>{player2} (O)</Text>
            </View>
            <View style={styles.scoreRow}>
                <Text style={styles.score}>Vitórias {player1}: {stats.wins.p1}</Text>
                <Text style={styles.score}>Vitórias {player2}: {stats.wins.p2}</Text>
                <Text style={styles.score}>Empates: {stats.draws}</Text>
                <Text style={styles.score}>Partidas: {stats.games}</Text>
            </View>
            <View style={styles.gameBoard}>
                <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} disabled={calculateWinner(currentSquares) || (opponent === 'machine' && !xIsNext && true)} />
            </View>
            <View style={styles.containerHistorico}>
                {moves}
                <TouchableOpacity onPress={onBackToHome} style={styles.btnVoltar}>
                    <Text style={[styles.historico, { color: '#fff' }]}>Voltar ao início</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}

export default function AppGame() {
    const [screen, setScreen] = useState('home'); // 'home' | 'game'
    const [opponent, setOpponent] = useState('human');
    const [player1, setPlayer1] = useState('');
    const [player2, setPlayer2] = useState('');
    const [stats, setStats] = useState({ wins: { p1: 0, p2: 0 }, draws: 0, games: 0, currentStreak: { player: null, count: 0 }, longestStreak: { player: null, count: 0, vsMachine: false } });

    function startGame() {
        const p1 = player1.trim() || 'Jogador 1';
        let p2;
        if (opponent === 'machine') p2 = 'Adversario';
        else p2 = player2.trim() || 'Jogador 2';
        setPlayer1(p1);
        setPlayer2(p2);
        setScreen('game');
    }

    function backToHome() {
        setScreen('home');
    }

    // Home screen: selection and stats
    if (screen === 'home') {
        return (
            <View style={[styles.game, { padding: 20 }]}> 
                <Text style={[styles.status, { marginBottom: 10 }]}>Jogo da Velha</Text>
                <View style={{ marginBottom: 10 }}>
                    <TouchableOpacity onPress={() => setOpponent('human')} style={[styles.btnReiniciar, opponent === 'human' ? { backgroundColor: '#666' } : null]}>
                        <Text style={{ color: '#fff' }}>Jogar contra pessoa</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setOpponent('machine')} style={[styles.btnReiniciar, opponent === 'machine' ? { backgroundColor: '#666' } : null]}>
                        <Text style={{ color: '#fff' }}>Jogar contra máquina</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ marginBottom: 10 }}>
                    <TextInput placeholder="Nome do Jogador 1" value={player1} onChangeText={setPlayer1} style={styles.input} />
                    {opponent === 'human' && <TextInput placeholder="Nome do Jogador 2" value={player2} onChangeText={setPlayer2} style={styles.input} />}
                </View>
                <TouchableOpacity onPress={startGame} style={[styles.btnReiniciar, { alignSelf: 'center' }]}>
                    <Text style={{ color: '#fff' }}>Iniciar</Text>
                </TouchableOpacity>

                <View style={{ marginTop: 20 }}>
                    <Text style={styles.historico}>Estatísticas</Text>
                    <Text style={styles.score}>Maior sequência de vitórias: {stats.longestStreak.count || 0}</Text>
                    <Text style={styles.score}>Jogador: {stats.longestStreak.player || '-'}</Text>
                    <Text style={styles.score}>Contra máquina: {stats.longestStreak.vsMachine ? 'Sim' : 'Não'}</Text>
                </View>
            </View>
        );
    }

    return (
        <Game opponent={opponent} player1={player1} player2={player2} onBackToHome={backToHome} stats={stats} setStats={setStats} />
    );
}