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
});
