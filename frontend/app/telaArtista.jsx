        {/* Barra de Ações */}
        <View style={styles.actionBar}>
          <TouchableOpacity style={styles.followButton}>
            <Text style={styles.followButtonText}>Seguir</Text>
          </TouchableOpacity>
          <View style={styles.actionButtons}>
            <TouchableOpacity style={styles.iconButton}>
              <Text style={styles.iconButtonText}>{'<>'}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconButton}>
              <Text style={styles.iconButtonText}>{'>'}</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.songListContainer}>
          <Text style={styles.popularTitle}>Popular</Text>
          <SongItem title="Musica 1" />
          <SongItem title="Musica 2" />
          <SongItem title="Musica 3" />
          <SongItem title="Musica 4" />
          <SongItem title="Musica 5" />
          <SongItem title="Musica 6" />
          <SongItem title="Musica 7" />
        </View>
        <TouchableOpacity style={styles.footer}>
          <Text style={styles.footerText}>Ver discografia</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    width: '100%',
    height: 300,
  },
  headerImage: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  headerOverlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    padding: 20,
    paddingTop: 40,
  },
  backButton: {
    position: 'absolute',
    top: 50,
    left: 20,
    backgroundColor: 'rgba(0,0,0,0.4)',
    padding: 10,
    borderRadius: 20,
  },
});
